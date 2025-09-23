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
};
