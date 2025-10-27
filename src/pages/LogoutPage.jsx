import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Power } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const LogoutPage = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(30); // Start at 30 seconds

  // Auto logout after 30 seconds
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
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <Card className="w-[70%] h-[60vh] text-center shadow-xl border border-gray-200 rounded-2xl bg-white flex flex-col justify-center items-center">
        <CardContent className="flex flex-col items-center">
          <Power className="text-red-500 w-20 h-20 mb-6" />
          <h2 className="text-3xl font-bold mb-3">Logging Out</h2>
          <p className="text-sm text-gray-500 mb-2">
            You will be redirected to login shortly.
          </p>
          <p className="text-xs text-gray-400 mb-8">
            Auto logging out in {countdown}s...
          </p>

          <Button
            onClick={handleLogout}
            className="bg-green-300 hover:bg-green-400 text-black font-semibold w-[250px] text-lg py-5 rounded-full transition-all"
          >
            Log out now
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default LogoutPage;
