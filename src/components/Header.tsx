import React from 'react';
import Logo from './Logo';

export default function Header() {
  return (
    <div className="text-center space-y-6 mb-10">
      <Logo />
      <div className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold text-secondary">
          Create your Razorpay account
        </h1>
        <p className="text-gray-600">
          Start accepting payments in minutes
        </p>
      </div>
    </div>
  );
}