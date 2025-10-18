import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Power } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CreateTicket() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
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

      {/* Main */}
      <main className="flex flex-1 items-center justify-center bg-gray-50">
        <div className="flex justify-center items-center gap-16 w-full">
          {/* Create Ticket Card */}
          <Card className="w-[40%] h-[350px] text-center shadow-lg border border-gray-200 flex flex-col justify-between p-6">
            <CardHeader className="flex flex-col items-center">
              <div className="bg-green-100 p-5 rounded-full">
                <Plus className="text-green-800 w-8 h-8" />
              </div>
              <CardTitle className="text-2xl font-bold mt-4">
                Create Ticket
              </CardTitle>
              <p className="text-gray-600 text-base mt-2">
                Submit service request
              </p>
            </CardHeader>

            <CardContent className="flex justify-center">
              <Button
                onClick={() => navigate("/ticket-form")}
                className="bg-green-700 hover:bg-green-800 text-white font-semibold text-lg px-10 py-4 rounded-full w-[70%]"
              >
                Create Ticket
              </Button>
            </CardContent>
          </Card>

          {/* Logout Card */}
          <Card className="w-[40%] h-[350px] text-center shadow-lg border border-gray-200 flex flex-col justify-between p-6">
            <CardHeader className="flex flex-col items-center">
              <div className="bg-red-100 p-5 rounded-full">
                <Power className="text-red-600 w-8 h-8" />
              </div>
              <CardTitle className="text-2xl font-bold mt-4 text-gray-800">
                Are you sure you want to logout?
              </CardTitle>
              <p className="text-gray-600 text-sm mt-2 text-center">
                Note: You will need to log in again to access your account.
              </p>
            </CardHeader>

            <CardContent className="flex justify-center">
              <Button
                onClick={() => navigate("/login")}
                variant="outline"
                className="border border-red-600 text-red-600 hover:bg-red-100 font-semibold text-lg px-10 py-4 rounded-full w-[70%]"
              >
                Yes
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
