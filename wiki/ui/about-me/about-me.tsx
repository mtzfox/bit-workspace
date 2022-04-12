import React, { ReactNode } from 'react';

export type AboutMeProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function AboutMe({ children }: AboutMeProps) {
  return (
    <div>
      {children}
    </div>
  );
}
