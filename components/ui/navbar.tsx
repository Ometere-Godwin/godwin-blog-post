"use client";

import { Button } from "./button";
import Link from "next/link";
import { BarChart3 } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-gray-900/50 backdrop-blur-lg border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <BarChart3 className="h-8 w-8 text-emerald-500" />
              <span className="text-xl font-bold text-white">FinArchitect</span>
            </Link>
            
            <div className="hidden md:flex space-x-6">
              <Link href="/overview" className="text-gray-300 hover:text-white">
                Overview
              </Link>
              <Link href="/get-started" className="text-gray-300 hover:text-white">
                Get Started
              </Link>
              <Link href="/case-studies" className="text-gray-300 hover:text-white">
                Case Studies
              </Link>
            </div>
          </div>
          
          <Button 
            className="bg-emerald-700 hover:bg-emerald-600 text-white"
          >
            Get a Financial Model
          </Button>
        </div>
      </div>
    </nav>
  );
}