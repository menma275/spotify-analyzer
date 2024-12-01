import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string; // className prop (optional)
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={`max-w-screen-lg w-full mx-auto ${className}`}>
      {children}
    </div>
  );
}
