import Image from "next/image";

const ProfilePicture = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="w-24 h-24 relative rounded-full overflow-hidden border-2 border-customDarkGreen">
      <Image
        src={imageUrl}
        alt="Profile Picture"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default ProfilePicture;
