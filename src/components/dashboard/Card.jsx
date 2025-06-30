import React from "react";

export default function Card({ title, value, icon }) {
  return (
    <div className="flex items-center gap-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
      <div className="text-3xl text-violet-600 dark:text-violet-400">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
          {title}
        </h3>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">
          {value}
        </p>
      </div>
    </div>
  );
}
