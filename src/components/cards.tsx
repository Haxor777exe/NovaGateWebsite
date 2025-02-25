import React from "react";

const ServiceCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="relative h-full flex flex-col p-6 rounded-lg border border-sc-border shadow-lg sc-base hover:sc-hover transition-all duration-300 group">
    <div className="absolute inset-0 bg-sc-overlay/10 rounded-lg group-hover:bg-sc-overlay/20 transition-all duration-300"></div>
    <Icon className="w-12 h-12 text-sc-icon mb-4 group-hover:text-white transition-all duration-300" />
    <h3 className="text-xl font-mono text-white mb-2">{title}</h3>
    <p className="text-gray-200">
      {description}
    </p>
  </div>
);

export default ServiceCard;
