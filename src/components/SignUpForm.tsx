import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { validateEmail, validateName, validatePhone } from '../utils/validation';
import FormField from './FormField';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  acceptTerms: boolean;
}

export default function SignUpForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    acceptTerms: false,
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData(prev => ({ ...prev, phone: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Partial<FormData> = {};

    if (!validateName(formData.firstName)) {
      newErrors.firstName = 'Please enter a valid first name';
    }
    if (!validateName(formData.lastName)) {
      newErrors.lastName = 'Please enter a valid last name';
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'You must accept the terms and conditions';
    }

    if (Object.keys(newErrors).length === 0) {
      setSuccess(true);
      // Handle form submission here
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          id="firstName"
          name="firstName"
          label="First Name"
          type="text"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="John"
          maxLength={50}
          error={errors.firstName}
          required
        />

        <FormField
          id="lastName"
          name="lastName"
          label="Last Name"
          type="text"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Doe"
          maxLength={50}
          error={errors.lastName}
          required
        />
      </div>

      <FormField
        id="email"
        name="email"
        label="Email Address"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="john.doe@example.com"
        maxLength={100}
        error={errors.email}
        required
      />

      <FormField
        id="phone"
        name="phone"
        label="Phone Number"
        type="tel"
        value={formData.phone}
        onChange={handlePhoneChange}
        placeholder="9876543210"
        error={errors.phone}
        prefix={
          <span className="flex items-center justify-center h-full px-3 border-r border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
            +91
          </span>
        }
        icon={<Phone className="h-4 w-4 text-gray-400" />}
        required
      />

      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="acceptTerms"
            name="acceptTerms"
            checked={formData.acceptTerms}
            onChange={handleChange}
            className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
          />
          <label htmlFor="acceptTerms" className="text-sm text-gray-700">
            I accept the <a href="#" className="text-primary hover:text-primary/80 font-medium">Terms and Conditions</a>
          </label>
        </div>
        {errors.acceptTerms && (
          <p className="text-sm text-red-600">{errors.acceptTerms}</p>
        )}

        <button
          type="submit"
          className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
        >
          Sign Up
        </button>

        <p className="text-center text-sm text-gray-600">
          {/* Already have an account?{' '} */}
          <a href="#" className="font-medium text-primary hover:text-primary/80">
            {/* Log in */}
          </a>
        </p>

        {success && (
          <div className="p-4 rounded-md bg-green-50 text-green-700 animate-fade-in">
            Successfully signed up!
          </div>
        )}
      </div>
    </form>
  );
}