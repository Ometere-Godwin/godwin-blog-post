"use client";

import { Button } from "./button";

export function HeroSection() {
  return (
    <div className="relative min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-50">
            Financial Modelling,
            <br />
            <span className="text-gray-300">Made Easy</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            FinArchitect is an easy to use yet powerful financial modelling software. Save time making complex financial spreadsheets and focus on making decisions for your business.
          </p>
          <Button 
            size="lg"
            className="bg-emerald-700 hover:bg-emerald-600 text-white px-8 py-6 text-lg"
          >
            Get a Financial Model
          </Button>
        </div>
        <div className="flex-1">
          <CashAnalysisDemo />
        </div>
      </div>
    </div>
  );
}

function CashAnalysisDemo() {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
      <h3 className="text-2xl font-semibold text-blue-400 mb-6">Cash Analysis</h3>
      <div className="space-y-6">
        <div className="space-y-4">
          {["Expenses", "Cost of Sales", "Income"].map((label) => (
            <div key={label} className="flex items-center justify-between">
              <span className="text-gray-400">{label}</span>
              <div className="flex gap-3">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="h-2 w-16 bg-gray-700 rounded animate-pulse"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-800/50 rounded-lg p-4">
            <div className="space-y-3">
              <div className="flex justify-between text-sm text-gray-500">
                <span>SEP 21</span>
                <span>OCT 21</span>
                <span>NOV 21</span>
              </div>
              {["Cashflow", "Payments", "Forecast"].map((label) => (
                <div key={label} className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{label}</span>
                  <div className="flex gap-2">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="h-1.5 w-8 bg-gray-700 rounded animate-pulse"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-4">
            <div className="relative">
              <svg
                className="w-full h-32"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#374151"
                  strokeWidth="10"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#EC4899"
                  strokeWidth="10"
                  strokeDasharray="220"
                  strokeDashoffset="66"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-gray-400 text-sm">Receipts</span>
                <span className="text-gray-400 text-sm">Payments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}