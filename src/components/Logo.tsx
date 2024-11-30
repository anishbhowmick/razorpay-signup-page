import React from 'react';
import { CreditCard } from 'lucide-react';

export default function Logo() {
  return (
    <div className="inline-flex items-center justify-center space-x-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
      <CreditCard className="h-8 w-8 text-primary" />
      <span className="text-2xl font-bold text-secondary">Razorpay</span>
    </div>
  );
}