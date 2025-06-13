import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

export default function ContactDetailSection() {
  return (
    <section className="bg-white py-16 lg:py-24 px-4 lg:px-12">
      <div className="max-w-8xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Side - Contact Information */}
          <div className="flex-1">
            <div className="mb-12">
              <h2 className="h6 lg:h5 text-gray-900 mb-6">
                Have questions or need assistance?
              </h2>
              <p className="tsm lg:tlg text-gray-500">
                We're here to help! Whether you have inquiries about our services, need guidance on
                your next steps, or require support, our team is ready to assist you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-8 mb-12">
              {/* Row 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="tsm lg:tmd font-medium text-gray-500 mb-3">Message Us</h3>
                  <p className="tsm lg:tmd font-medium text-gray-900">support@urbanet.com</p>
                </div>
                <div>
                  <h3 className="tsm lg:tmd font-medium text-gray-500 mb-3">Call Us</h3>
                  <p className="tsm lg:tmd font-medium text-gray-900">(555) 987-6543</p>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="tsm lg:tmd font-medium text-gray-500 mb-3">Location</h3>
                  <p className="tsm lg:tmd font-medium text-gray-900">
                    4567 Elm Street, Suite 301, Greenfield, TX, 78901
                  </p>
                </div>
                <div>
                  <h3 className="tsm lg:tmd font-medium text-gray-500 mb-3">Business Hours</h3>
                  <p className="tsm lg:tmd font-medium text-gray-900">Monday - Friday, 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="tsm lg:tmd font-medium text-gray-500 mb-4">Social Media</h3>
              <div className="flex gap-3">
                {['Twitter', 'Facebook', 'Instagram', 'LinkedIn'].map((social) => (
                  <div
                    key={social}
                    className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 cursor-pointer"
                  >
                    <div className="w-4 h-4 bg-gray-900 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="flex-1">
            <Card className="border border-gray-200 rounded-2xl p-6 lg:p-8">
              <CardContent className="p-0">
                <form className="space-y-8">
                  {/* Full Name */}
                  <div>
                    <label className="block txs lg:tsm font-semibold text-gray-900 mb-4">Full Name</label>
                    <Input
                      type="text"
                      placeholder="Jhon |"
                      className="w-full px-3 py-2 border border-gray-900 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block txs lg:tsm font-semibold text-gray-900 mb-4">Email Address</label>
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block txs lg:tsm font-semibold text-gray-900 mb-4">Phone Number</label>
                    <Input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block txs lg:tsm font-semibold text-gray-900 mb-4">Subject</label>
                    <Input
                      type="text"
                      placeholder="Enter the subject of your message"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block txs lg:tsm font-semibold text-gray-900 mb-4">Message</label>
                    <textarea
                      placeholder="Enter your message here"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                  >
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
