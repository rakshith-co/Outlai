import Image from "next/image";
import type { SVGProps } from "react";

export const Icons = {
  logo: (props: Omit<React.ComponentProps<typeof Image>, 'src' | 'alt' | 'width' | 'height' | 'fill'>) => (
    <div className="relative w-full h-full">
        <Image 
            src="/logo.png" 
            alt="Outlai Logo" 
            fill
            style={{ objectFit: 'contain' }}
            {...props} 
        />
    </div>
  ),
  discord: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22a10 10 0 0 0 8.5-4.8" />
      <path d="M3.5 17.2A10 10 0 0 1 12 2" />
      <path d="M12 2a10 10 0 0 1 8.5 15.2" />
      <path d="M3.5 6.8A10 10 0 0 0 12 22" />
      <path d="M15 9a2 2 0 0 0-2-2 2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2" />
      <path d="M9 9a2 2 0 0 1 2-2 2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H9" />
    </svg>
  ),
};
