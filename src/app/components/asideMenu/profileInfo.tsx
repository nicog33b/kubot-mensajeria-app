interface ProfileInfoProps {
    initials: string;
    name: string;
  }
  
  const ProfileInfo: React.FC<ProfileInfoProps> = ({ initials, name }) => {
    return (
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <div className="w-8 h-8 rounded-full bg-gray-500 text-white flex items-center justify-center">
            <span>{initials}</span>
          </div>
          <div className="ml-2">
            <span className="font-semibold">{name}</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProfileInfo;
  