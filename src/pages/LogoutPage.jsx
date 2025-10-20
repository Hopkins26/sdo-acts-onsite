import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Power } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const LogoutPage = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  // Auto logout after 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          handleLogout();
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <header className="w-full bg-white shadow-sm flex items-center justify-between px-8 py-4 border-b">
        <div className="flex items-center space-x-3">
          <img
            src="/src/assets/SDO logo.png"
            alt="SDO Logo"
            className="h-12 w-12"
          />
          <h1 className="text-2xl font-bold text-green-800">Home</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full border hover:bg-gray-100">
            <img
              src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
              alt="User Icon"
              className="w-6 h-6"
            />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 justify-center items-center bg-gray-50">
        <Card className="w-[70%] h-[60vh] text-center shadow-xl border border-gray-200 rounded-2xl bg-white flex flex-col justify-center items-center">
          <CardContent className="flex flex-col items-center">
            <Power className="text-red-500 w-20 h-20 mb-6" />
            <h2 className="text-2xl font-bold mb-3">
              Are you sure you want to logout?
            </h2>
            <p className="text-sm text-gray-500 mb-2">
              Note: You will need to log in again to access your account.
            </p>
            <p className="text-xs text-gray-400 mb-8">
              Auto logging out in {countdown}s...
            </p>

            <Button
              onClick={handleLogout}
              className="bg-green-300 hover:bg-green-400 text-black font-semibold w-[250px] text-lg py-5 rounded-full transition-all"
            >
              Log out
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default LogoutPage;
