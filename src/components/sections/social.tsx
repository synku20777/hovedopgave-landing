import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

interface SocialProps {
  position?: 'left' | 'right';
  instagramLink: string;
}

const Social: FC<SocialProps> = ({ 
  position = 'right',
  instagramLink
}) => {
  return (
    <div 
      className={`fixed z-50 bottom-12 ${
        position === 'left' ? 'left-4' : 'right-4'
      }`}
    >
      <Button
        variant="secondary"
        size="icon"
        className="rounded-full shadow-md hover:scale-110 transition-transform bg-white/90 hover:bg-white"
        asChild
      >
        <a 
          href={instagramLink}
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Instagram className="h-10 w-10 text-pink-600" />
        </a>
      </Button>
    </div>
  );
};

export default Social;