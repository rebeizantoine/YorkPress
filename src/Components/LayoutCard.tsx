import React, { ReactNode } from "react";

interface LayoutCardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const LayoutCard: React.FC<LayoutCardProps> = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <div className="w-full max-w-[1280px] min-h-[90vh] p-8 bg-card text-light rounded-[32px] card-shadow mx-auto font-poppins">
      <div className="h-[54px] mb-[20px]">
        <h1 className="font-bold mb-2 text-[24px] text-[#F4F6FA]">{title}</h1>
        {subtitle && (
          <p className="text-muted mb-6 text-[12px] opacity-50 mt-[-6px]">
            {subtitle}
          </p>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default LayoutCard;
