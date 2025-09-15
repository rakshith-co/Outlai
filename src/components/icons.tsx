import Image from "next/image";
import type { SVGProps } from "react";

export const Icons = {
  logo: (props: Omit<React.ComponentProps<typeof Image>, 'src' | 'alt'>) => (
    <Image 
        src="/logo.png" 
        alt="Outlai Logo" 
        width={104} 
        height={28} 
        {...props} 
    />
  ),
};
