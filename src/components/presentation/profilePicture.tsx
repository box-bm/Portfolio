import Image from "next/image";

const ProfilePicture = () => {
  return (
    <Image
      src="/photo.jpeg"
      alt="my profile photo"
      width={260}
      height={260}
      style={{
        height: "auto",
        width: "auto",
        maxHeight: 260,
        maxWidth: 260,
        borderRadius: 1000,
      }}
    />
  );
};

export default ProfilePicture;
