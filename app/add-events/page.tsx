import { EventForm } from '@/components/events/event-form';
import { Header } from '@/components/ui/page-header';

const Page = () => {
  const addEventImagePath = "/event.svg";
  const addEventHeaderText = `Create and share amazing events with our community. Upload photos and videos to showcase your event and provide all the details attendees need to know.`;

  return (
    <>
      {/* Background decorative elements */}
      <div className="absolute top-[-100px] left-[-100px] w-80 h-80 bg-light-red rounded-full blur-[80px] opacity-30"></div>
      {/* <div className="absolute top-[600px] right-[-150px] w-80 h-80 bg-light-red rounded-full blur-[80px] opacity-30"></div> */}
      
      {/* Header */}
      <Header 
        pageName="Add Event" 
        title="Create Your Event" 
        headerText={addEventHeaderText} 
        imagePath={addEventImagePath} 
      />

      {/* Event Form */}
      <section className="w-full my-8 px-8 lg:px-24 max-w-4xl mx-auto">
        <EventForm />
      </section>
    </>
  );
};

export default Page;
