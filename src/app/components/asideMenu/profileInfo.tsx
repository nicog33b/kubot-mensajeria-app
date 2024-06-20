import React from "react";

interface ProfileInfoProps {
  name: string;
  initials: string;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ name, initials }) => {
  return (
    <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center justify-center w-12 h-12 bg-gray-300 rounded-full text-xl font-bold">
        {initials}
      </div>
      <div>
        <div className="font-semibold text-lg">{name}</div>
        <div className="text-gray-500 text-sm">View Profile</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
