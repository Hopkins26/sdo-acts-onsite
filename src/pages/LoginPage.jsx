import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Mail, Lock } from "lucide-react"; // 

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-gray-100">
      <div className="flex flex-col md:flex-row w-full h-screen bg-white rounded-none shadow-lg overflow-hidden">
        {/* Left side - 60% */}
        <div className="hidden md:flex w-[60%] relative bg-green-800 text-white">
          <img
            src="/sdo-bg.jpg"
            alt="SDO Meycauayan"
            className="object-cover w-full h-full opacity-50"
          />
          <div className="absolute inset-0 bg-green-900/60" />
          <div className="absolute inset-0 flex flex-col justify-end p-12 z-10">
            <h1 className="text-5xl font-bold">SDO-ACTS</h1>
            <p className="text-lg mt-2">
              A Centralized Ticketing System for SDO Meycauayan
            </p>
          </div>
        </div>

        {/* Right side - 40% */}
        <div className="w-full md:w-[40%] flex items-center justify-center p-10 bg-white">
          <Card className="w-full max-w-sm border-none shadow-none">
            <CardHeader className="text-center">
              <img
                src="/sdo-logo.png"
                alt="SDO Logo"
                className="mx-auto mb-4 h-16 w-16"
              />
              <CardTitle className="text-2xl font-bold text-green-800">
                Welcome!
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                {/* Email Input with Icon */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Password Input with Icon */}
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      className="pl-10"
                    />
                  </div>
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
