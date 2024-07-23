import React from "react";

type TypographyType = {
  variant?: "h1" | "h2" | "p" | "h3";
  content: string;
  className?: string;
  children?: React.ReactNode;
};
const defaultClassNames = {
  h1: "text-2xl font-bold mb-2",
  h2: "text-lg font-bold line-clamp-2",
  h3: "text-xl mb-2 mb-4",
  p: "text-sm text-gray-500 mb-4",
};
const Typography = ({
  variant = "p",
  content,
  className,
  children,
}: TypographyType) => {
  const Tag = variant || "p";

  const combinedClassName = `${defaultClassNames[Tag]} ${
    className || ""
  }`.trim();

  return (
    <Tag className={combinedClassName}>
      {content}
      {children}
    </Tag>
  );
};

export default Typography;
