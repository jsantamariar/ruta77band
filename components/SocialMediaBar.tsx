import Image from "next/image";
import { SOCIAL_MEDIA_URLS } from "@/constants";

export const SocialMediaBar = () => {
  return (
    <>
      <div
        className="bg-black rounded-md rounded-r-none flex flex-col items-center 
      justify-center space-y-4 z-10 gap-5 fixed top-60 right-0 p-4"
      >
        <a target="_blank" href={SOCIAL_MEDIA_URLS.instagram}>
          <Image
            className="cursor-pointer"
            src="/instagram.svg"
            alt="Instagram"
            width={24}
            height={24}
          />
        </a>
        <a target="_blank" href={SOCIAL_MEDIA_URLS.tiktok}>
          <Image
            className="cursor-pointer"
            src="/tiktok.svg"
            alt="Tik Tok"
            width={24}
            height={24}
          />
        </a>
        <a target="_blank" href={SOCIAL_MEDIA_URLS.whatsapp}>
          <Image
            className="cursor-pointer"
            src="/whatsapp.svg"
            alt="Whatsapp"
            width={24}
            height={24}
          />
        </a>
        <a target="_blank" href={SOCIAL_MEDIA_URLS.youtube}>
          <Image
            className="cursor-pointer"
            src="/youtube.svg"
            alt="Youtube"
            width={24}
            height={24}
          />
        </a>
      </div>
    </>
  );
};
