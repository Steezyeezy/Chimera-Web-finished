import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const INITIAL_FORM_STATE: FormData = {
  name: '',
  email: '',
  phone: '',
  message: ''
};

export function Contact() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_STATE);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setError('Please enter your name');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Please enter your email');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    if (!formData.message.trim()) {
      setError('Please enter your message');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      await emailjs.sendForm(
        'service_g2mtdbu',
        'template_1ma2kaj',
        formRef.current!,
        'NOiNhblWzDbc1Y0E0'
      );

      setSubmitted(true);
      setFormData(INITIAL_FORM_STATE);
    } catch (err) {
      setError('Failed to send message. Please try again later.');
      console.error('EmailJS Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(null);
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Header Section */}
      <div className="container mx-auto px-4 mb-16 text-center">
        <h1 className="text-5xl font-serif text-black mb-4">Get in Touch</h1>
        <p className="text-xl text-black">We'd love to hear from you!</p>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-gold mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-black mb-4">Thank you for reaching out!</h3>
                <p className="text-black">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
                    {error}
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-black mb-1">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Type your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-gold text-white px-6 py-3 rounded-lg text-lg hover:bg-gold-dark transition ${
                    loading ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-serif text-black mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-gold mt-1 mr-4" />
                <div>
                  <p className="font-medium text-black">Phone</p>
                  <a href="tel:801-694-7583" className="text-black hover:text-gold transition">
                    801-694-7583
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-gold mt-1 mr-4" />
                <div>
                  <p className="font-medium text-black">Email</p>
                  <a href="mailto:chimeraconstruction@gmail.com" className="text-black hover:text-gold transition">
                    chimeraconstruction@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-gold mt-1 mr-4" />
                <div>
                  <p className="font-medium text-black">Address</p>
                  <a 
                    href="https://maps.google.com/?q=3155+South+Main+Street,+South+Salt+Lake,+Utah+84115"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-gold transition"
                  >
                    3155 South Main Street<br />
                    South Salt Lake, Utah 84115
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}