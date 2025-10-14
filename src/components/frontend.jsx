import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

// Simple test component (optional)
export function Frontend() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-green-700">
        Hello from Frontend 👋
      </h1>
    </div>
  );
}

// Main login page
export default function Frontend() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Left side - image and text */}
        <div className="hidden md:flex md:w-1/2 relative bg-green-800 text-white">
          <div className="absolute inset-0 bg-green-800/80" />
          <img
            src="/sdo-bg.jpg"
            alt="SDO Meycauayan"
            className="object-cover w-full h-full opacity-40"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <h1 className="text-3xl font-bold">SDO-ACTS</h1>
            <p className="text-sm">
              A Centralized Ticketing System for SDO Meycauayan
            </p>
          </div>
        </div>

        {/* Right side - login form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-10">
          <Card className="w-full max-w-sm border-none shadow-none">
            <CardHeader className="text-center">
              <img
                src="/sdo-logo.png"
                alt="SDO Logo"
                className="mx-auto mb-4 h-16 w-16"
              />
              <CardTitle className="text-2xl font-bold">Welcome!</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter your password" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me?</Label>
                  </div>
                  <a href="#" className="text-sm text-green-700 hover:underline">
                    Forgot password?
                  </a>
                </div>
                <Button className="w-full bg-green-700 hover:bg-green-800 text-white">
                  Login
                </Button>
                <p className="text-center text-sm mt-2">
                  New here?{" "}
                  <a href="#" className="text-green-700 hover:underline">
                    Create an account
                  </a>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// src/components/ui/frontend.jsx
export default function Frontend() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold mb-4">Welcome to the Frontend</h1>
      <p className="text-lg opacity-90 mb-8">
        This component is rendered successfully!
      </p>
      <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition">
        Get Started
      </button>
    </div>
  );
}

