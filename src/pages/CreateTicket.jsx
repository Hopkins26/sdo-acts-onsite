import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Power, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

        {/* Avatar Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-2 rounded-full border hover:bg-gray-100">
              <img
                src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                alt="User Icon"
                className="w-8 h-8"
              />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuItem
              onClick={() => navigate("/login")}
              className="cursor-pointer text-red-600"
            >
              <LogOut className="w-4 h-4 mr-2" /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>

      {/* Main */}
      <main className="flex flex-1 items-center justify-center bg-gray-50">
        <div className="flex justify-center items-center gap-7 w-[75%]">
          {/* Create Ticket Card */}
          <Card className="flex-3 h-[350px] text-center shadow-lg border border-gray-200 flex flex-col justify-center p-6">
            <CardHeader className="flex flex-col items-center mb-0">
              <div
                onClick={() => navigate("/ticket-form")}
                className="bg-green-100 p-5 rounded-full cursor-pointer hover:bg-green-200 transition"
              >
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
                className="bg-green-700 hover:bg-green-800 text-white font-semibold text-lg px-10 py-4 rounded-full w-[80%]"
              >
                Create Ticket
              </Button>
            </CardContent>
          </Card>

          {/* Logout Card */}
          <Card className="flex-1 h-[350px] text-center shadow-lg border border-gray-200 flex flex-col justify-center p-6">
            <CardHeader className="flex flex-col items-center">
              <div
                onClick={() => navigate("/login")}
                className="bg-red-100 p-5 rounded-full cursor-pointer hover:bg-red-200 transition"
              >
                <Power className="text-red-600 w-8 h-8" />
              </div>
              <CardTitle className="text-2xl font-bold mt-4 text-gray-800">
                Logout
              </CardTitle>
              <p className="text-gray-600 text-base mt-2">
                Log out of your account
              </p>
            </CardHeader>

            <CardContent className="flex justify-center">
              <Button
                onClick={() => navigate("/login")}
                variant="outline"
                className="border border-red-600 text-red-600 hover:bg-red-100 font-semibold text-lg px-10 py-4 rounded-full w-[80%]"
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
