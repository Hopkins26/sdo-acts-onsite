import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

// ✅ Import your assets
import bgImage from "@/assets/SDO Background.png";
import logo from "@/assets/SDO logo.png";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/create-ticket"); // Temporary redirect
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Left side - 60% */}
      <div className="relative w-[60%] bg-green-800 text-white flex items-end">
        {/* Background image */}
        <img
          src={bgImage}
          alt="SDO Meycauayan"
          className="absolute inset-0 object-cover w-[115%] h-full translate-x- opacity-60"
        />
        {/* Green overlay */}
        <div className="absolute inset-0 bg-green-900/60" />
        {/* Text content */}
        <div className="absolute bottom-10 left-10 z-20">
          <h1 className="font-bold text-8xl leading-none">SDO-ACTS</h1>
          <p className="text-xl lg:text-3xl">
            A Centralized Ticketing System for SDO Meycauayan
          </p>
        </div>
      </div>

      {/* Right side - 40% */}
      <div className="w-[40%] flex items-center justify-center bg-white p-12">
        <Card className="w-full max-w-sm border-none shadow-none">
          <CardHeader className="text-center">
            <img src={logo} alt="SDO Logo" className="mx-auto mb-6 h-28 w-28" />
            <CardTitle className="text-3xl font-bold text-green-800">
              Welcome!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-5" onSubmit={handleLogin}>
              {/* Email Input */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10 text-base py-6"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-base">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="pl-10 text-base py-6"
                  />
                </div>
              </div>

              {/* Remember / Forgot */}
              <div className="flex items-center justify-between text-base">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">Remember me?</Label>
                </div>
                <a href="#" className="text-green-700 hover:underline">
                  Forgot password?
                </a>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                className="w-full bg-green-700 hover:bg-green-800 text-white text-lg py-6"
              >
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
