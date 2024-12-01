import React from "react";

interface SectionHeaderProps {
  title: string;
  children?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  children,
}) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <h1 className="font-bold ">{title}</h1>
      {children}
    </div>
  );
};
