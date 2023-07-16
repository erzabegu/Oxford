import React from 'react';

export interface AvatarTypes extends React.HTMLAttributes<HTMLImageElement> {
  size?: 'sm' | 'lg';
  src: string;
}
