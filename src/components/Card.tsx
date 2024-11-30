import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 lg:p-10">
      {children}
    </div>
  );
}