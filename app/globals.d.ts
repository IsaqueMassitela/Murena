// globals.d.ts
declare module '@radix-ui/react-slot' {
  import * as React from 'react';
  export const Slot: React.FC<React.PropsWithChildren<{ asChild?: boolean }>>;
}

// Declaração do class-variance-authority
declare module 'class-variance-authority' {
  import * as React from 'react';
  export function cva(base: string, options?: any): (...args: any[]) => string;
  export type VariantProps<T> = any;
}