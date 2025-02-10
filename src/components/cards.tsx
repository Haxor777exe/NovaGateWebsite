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
  <div className="relative p-6 bg-black/40 rounded-lg border border-blue-500/20 hover:border-blue-500 transition-all duration-300 group">
    <div className="absolute inset-0 bg-blue-500/5 rounded-lg group-hover:bg-blue-500/10 transition-all duration-300"></div>
    <Icon className="w-12 h-12 text-blue-500 mb-4 group-hover:text-blue-400 transition-all duration-300" />
    <h3 className="text-xl font-mono text-blue-400 mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

export default ServiceCard;
