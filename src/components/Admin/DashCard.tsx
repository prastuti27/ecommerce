import React from "react";

interface CardProps {
  title: string;
  count: number;
  color: string;
  icon: React.ReactNode; // Add an icon as a ReactNode
  additionalInfo?: string; // Optional additional information
}

const Card = ({ title, count, color, icon, additionalInfo }: CardProps) => {
  return (
    <div
      className="text-white p-5 rounded-lg m-2 flex-1 text-center shadow-md"
      style={{
        background: `linear-gradient(135deg, ${color} 50%, #000000 100%)`,
      }}
    >
      <div className="text-3xl mb-3">{icon}</div> {/* Display the icon */}
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-xl font-bold">{count}</p>
      {additionalInfo && <p className="text-sm mt-2">{additionalInfo}</p>}{" "}
      {/* Optional additional info */}
    </div>
  );
};

export default Card;
