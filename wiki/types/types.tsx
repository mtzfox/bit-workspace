import React, { ReactNode } from 'react';

export type TypesProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Types({ children }: TypesProps) {
  return (
    <div>
      {children}
    </div>
  );
}
