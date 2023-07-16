import React from 'react';

export interface NavItemTypes extends React.HTMLAttributes<HTMLLIElement> {
  isActive: boolean;
}
