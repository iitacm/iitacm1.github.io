"use client"

import React, { useState } from 'react';
import { Event, EventMedia } from '@/lib/interfaces';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar, Clock, MapPin, Link as LinkIcon, Upload, X, Video } from 'lucide-react';

interface FormData {
  name: string;
  description: string;
  start_time: string;
  end_time: string;
  location: string;
  place: string;
  timezone: string;
  link: string;
  media: File[];
}

export const EventForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    description: '',
    start_time: '',
    end_time: '',
    location: '',
    place: '',
    timezone: 'America/Chicago',
    link: '',
    media: []
  });

  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<{ [key: number]: number }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const newFiles = [...formData.media, ...files].slice(0, 4); // Max 4 files
    
    setFormData(prev => ({
      ...prev,
      media: newFiles
    }));
  };

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      media: prev.media.filter((_, i) => i !== index)
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = 'Event name is required';
    if (!formData.description.trim()) newErrors.description = 'Event description is required';
    if (!formData.start_time) newErrors.start_time = 'Start time is required';
    if (!formData.end_time) newErrors.end_time = 'End time is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.timezone) newErrors.timezone = 'Timezone is required';

    // Validate time logic
    if (formData.start_time && formData.end_time) {
      const start = new Date(formData.start_time);
      const end = new Date(formData.end_time);
      if (end <= start) {
        newErrors.end_time = 'End time must be after start time';
      }
    }

    // Validate file types and sizes
    formData.media.forEach((file, index) => {
      const maxSize = 10 * 1024 * 1024; // 10MB
      if (file.size > maxSize) {
        newErrors[`media_${index}`] = 'File size must be less than 10MB';
      }
      
      const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'video/mp4', 'video/webm'];
      if (!validTypes.includes(file.type)) {
        newErrors[`media_${index}`] = 'Only images (JPEG, PNG, WebP) and videos (MP4, WebM) are allowed';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const uploadToVercelBlob = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Upload failed');
    }

    const { url } = await response.json();
    return url;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setUploading(true);
    setUploadProgress({});

    try {
      // Upload media files to Vercel Blob
      const mediaUrls: EventMedia[] = [];
      
      for (let i = 0; i < formData.media.length; i++) {
        const file = formData.media[i];
        setUploadProgress(prev => ({ ...prev, [i]: 0 }));
        
        const url = await uploadToVercelBlob(file);
        const type = file.type.startsWith('video/') ? 'video' : 'image';
        
        mediaUrls.push({
          type,
          url,
          caption: '' // Can be enhanced later with caption input
        });
        
        setUploadProgress(prev => ({ ...prev, [i]: 100 }));
      }

      // Create event data
      const eventData: Omit<Event, 'id'> = {
        name: formData.name,
        description: formData.description,
        start_time: formData.start_time,
        end_time: formData.end_time,
        location: formData.location,
        place: formData.place,
        timezone: formData.timezone,
        link: formData.link || null,
        media: mediaUrls.length > 0 ? mediaUrls : null
      };

      // Submit to API
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });

      if (!response.ok) {
        throw new Error('Failed to create event');
      }

      setSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        description: '',
        start_time: '',
        end_time: '',
        location: '',
        place: '',
        timezone: 'America/Chicago',
        link: '',
        media: []
      });

    } catch (error) {
      console.error('Error creating event:', error);
      setErrors({ submit: 'Failed to create event. Please try again.' });
    } finally {
      setUploading(false);
      setUploadProgress({});
    }
  };

  if (success) {
    return (
      <Card className="p-8 text-center">
        <div className="mb-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-fontcolor mb-2">Event Created Successfully!</h2>
          <p className="text-gray-600 mb-6">Your event has been added and is now visible to the community.</p>
          <Button 
            onClick={() => setSuccess(false)}
            className="bg-light-red hover:bg-light-red/90"
          >
            Create Another Event
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Event Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-fontcolor mb-2">
            Event Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-light-red focus:border-transparent transition-colors ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter event name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-fontcolor mb-2">
            Event Description *
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={4}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-light-red focus:border-transparent transition-colors resize-none ${
              errors.description ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Describe your event in detail..."
          />
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
        </div>

        {/* Date and Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="start_time" className="block text-sm font-medium text-fontcolor mb-2">
              <Calendar className="w-4 h-4 inline mr-2" />
              Start Date & Time *
            </label>
            <input
              type="datetime-local"
              id="start_time"
              name="start_time"
              value={formData.start_time}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-light-red focus:border-transparent transition-colors ${
                errors.start_time ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.start_time && <p className="text-red-500 text-sm mt-1">{errors.start_time}</p>}
          </div>

          <div>
            <label htmlFor="end_time" className="block text-sm font-medium text-fontcolor mb-2">
              <Clock className="w-4 h-4 inline mr-2" />
              End Date & Time *
            </label>
            <input
              type="datetime-local"
              id="end_time"
              name="end_time"
              value={formData.end_time}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-light-red focus:border-transparent transition-colors ${
                errors.end_time ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.end_time && <p className="text-red-500 text-sm mt-1">{errors.end_time}</p>}
          </div>
        </div>

        {/* Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-fontcolor mb-2">
              <MapPin className="w-4 h-4 inline mr-2" />
              Location *
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-light-red focus:border-transparent transition-colors ${
                errors.location ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="e.g., Stuart Building, Chicago, IL"
            />
            {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
          </div>

          <div>
            <label htmlFor="place" className="block text-sm font-medium text-fontcolor mb-2">
              Room/Place
            </label>
            <input
              type="text"
              id="place"
              name="place"
              value={formData.place}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-red focus:border-transparent transition-colors"
              placeholder="e.g., SB 200, Room 101"
            />
          </div>
        </div>

        {/* Timezone and Link */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="timezone" className="block text-sm font-medium text-fontcolor mb-2">
              Timezone *
            </label>
            <select
              id="timezone"
              name="timezone"
              value={formData.timezone}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-light-red focus:border-transparent transition-colors ${
                errors.timezone ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="America/Chicago">Central Time (CT)</option>
              <option value="America/New_York">Eastern Time (ET)</option>
              <option value="America/Denver">Mountain Time (MT)</option>
              <option value="America/Los_Angeles">Pacific Time (PT)</option>
              <option value="UTC">UTC</option>
            </select>
            {errors.timezone && <p className="text-red-500 text-sm mt-1">{errors.timezone}</p>}
          </div>

          <div>
            <label htmlFor="link" className="block text-sm font-medium text-fontcolor mb-2">
              <LinkIcon className="w-4 h-4 inline mr-2" />
              Event Link
            </label>
            <input
              type="url"
              id="link"
              name="link"
              value={formData.link}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-red focus:border-transparent transition-colors"
              placeholder="https://example.com/event"
            />
          </div>
        </div>

        {/* Media Upload */}
        <div>
          <label className="block text-sm font-medium text-fontcolor mb-2">
            <Upload className="w-4 h-4 inline mr-2" />
            Event Media (Max 4 files)
          </label>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-light-red transition-colors">
            <input
              type="file"
              id="media"
              multiple
              accept="image/*,video/*"
              onChange={handleFileChange}
              className="hidden"
              disabled={formData.media.length >= 4}
            />
            <label
              htmlFor="media"
              className={`cursor-pointer ${formData.media.length >= 4 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600">
                {formData.media.length >= 4 
                  ? 'Maximum 4 files reached' 
                  : 'Click to upload images or videos (Max 10MB each)'
                }
              </p>
            </label>
          </div>

          {/* File Preview */}
          {formData.media.length > 0 && (
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
              {formData.media.map((file, index) => (
                <div key={index} className="relative group">
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                    {file.type.startsWith('image/') ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Video className="w-8 h-8 text-gray-400" />
                      </div>
                    )}
                  </div>
                  
                  {/* Upload Progress */}
                  {uploadProgress[index] !== undefined && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <div className="text-white text-sm">
                        {uploadProgress[index]}%
                      </div>
                    </div>
                  )}
                  
                  {/* Remove Button */}
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  
                  <p className="text-xs text-gray-500 mt-1 truncate">{file.name}</p>
                </div>
              ))}
            </div>
          )}

          {/* Media Errors */}
          {Object.keys(errors).some(key => key.startsWith('media_')) && (
            <div className="mt-2">
              {Object.entries(errors)
                .filter(([key]) => key.startsWith('media_'))
                .map(([key, error]) => (
                  <p key={key} className="text-red-500 text-sm">{error}</p>
                ))}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-6">
          {errors.submit && (
            <p className="text-red-500 text-sm mb-4">{errors.submit}</p>
          )}
          
          <Button
            type="submit"
            disabled={uploading}
            className="w-full bg-light-red hover:bg-light-red/90 text-white py-3 text-lg font-semibold"
          >
            {uploading ? (
              <div className="flex items-center gap-2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Creating Event...
              </div>
            ) : (
              'Create Event'
            )}
          </Button>
        </div>
      </form>
    </Card>
  );
};
