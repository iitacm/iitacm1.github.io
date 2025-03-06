import React from "react";
import Image from "next/image";
import { BoardMember } from "@/lib/interfaces"; // Ensure this interface includes `more_info`
import { CloseSVG } from "@/app/svgs";

interface BoardMemberModalProps {
  member: BoardMember;
  onClose: () => void;
}

export const BoardMemberModal: React.FC<BoardMemberModalProps> = ({ member, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
          onClick={onClose}
          aria-label="Close modal"
        >
          <CloseSVG />
        </button>
        <div className="flex flex-col items-center">
          <Image
            src={member.picture}
            width={150}
            height={150}
            className="rounded-full object-cover"
            alt={member.name}
          />
          <h3 className="mt-4 text-xl font-bold">{member.name}</h3>
          <p className="font-raleway mt-2 text-sm text-gray-700 text-center">Class of {member.year}</p>
          <p className="font-raleway mt-2 text-sm text-gray-700 text-center">Major: {member.major}</p>
          <p className="font-raleway mt-2 text-sm text-gray-700 text-center">{member.minor !== "" && `Minor: ${member.minor}`}</p>
        </div>
      </div>
    </div>
  );
};