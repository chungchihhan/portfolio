import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
  textSize?: string;
};

export default function SectionHeading({
  children,
  textSize = "text-3xl", // Default value for textSize
}: SectionHeadingProps) {
  return (
    <h2 className={`${textSize} font-medium capitalize mb-8 text-center`}>
      {children}
    </h2>
  );
}
