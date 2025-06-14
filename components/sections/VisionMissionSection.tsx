'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function VisionMissionSection() {
  const [activeTab, setActiveTab] = useState('vision');

  return (
    <section className="bg-gray-300 py-16 lg:py-24 px-4 lg:px-12">
      <div className="max-w-8xl mx-auto">
        <div className="max-w-2xl ml-auto bg-white rounded-xl p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <div className="flex-1">
              {/* Tab Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <Button
                  onClick={() => setActiveTab('vision')}
                  className={`px-6 py-3 rounded-lg txs lg:tsm font-semibold ${
                    activeTab === 'vision'
                      ? 'bg-gray-900 text-white'
                      : 'bg-transparent border border-gray-300 text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  Our Vision
                </Button>
                <Button
                  onClick={() => setActiveTab('mission')}
                  className={`px-6 py-3 rounded-lg txs lg:tsm font-semibold ${
                    activeTab === 'mission'
                      ? 'bg-gray-900 text-white'
                      : 'bg-transparent border border-gray-300 text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  Our Mission
                </Button>
              </div>

              {/* Content */}
              <div className="mb-8">
                <h3 className="h6 lg:h5 text-gray-900 mb-6">
                  Trusted & Innovative Real Estate Connection
                </h3>
                <p className="tsm lg:tmd text-gray-500">
                  Finding the perfect home or investment property requires expertise, trust, and
                  innovation. We bridge the gap between your real estate goals and seamless
                  transactions by combining industry knowledge with cutting-edge technology.
                </p>
              </div>

              {/* Progress Bar */}
              <div className="flex gap-2">
                <div className="flex-1 h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-gray-900 rounded-full transition-all duration-300"
                    style={{ width: activeTab === 'vision' ? '100%' : '0%' }}
                  ></div>
                </div>
                <div className="flex-1 h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-gray-900 rounded-full transition-all duration-300"
                    style={{ width: activeTab === 'mission' ? '100%' : '0%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
