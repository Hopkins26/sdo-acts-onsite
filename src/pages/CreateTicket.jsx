import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function CreateTicket() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Navbar */}
      <header className="w-full bg-white shadow-sm flex items-center justify-between px-8 py-4 border-b">
        <div className="flex items-center space-x-3">
          <img
            src="/src/assets/SDO logo.png"
            alt="SDO Logo"
            className="h-12 w-12" // 🟢 slightly smaller logo
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
      <main className="flex flex-1 items-center justify-center bg-gray-50">
        {/* 🟢 Card reduced from 50% → 42% */}
        <Card className="w-[42%] h-[42%] text-center shadow-lg border border-gray-200 flex flex-col justify-center">
          <CardHeader>
            <div className="flex justify-center">
              <div className="bg-green-100 p-5 rounded-full"> {/* slightly smaller */}
                <Plus className="text-green-800 w-8 h-8" /> {/* icon reduced */}
              </div>
            </div>
            <CardTitle className="text-2xl font-bold mt-4">
              Create Ticket
            </CardTitle>
            <p className="text-gray-600 text-base mt-2">Submit service request</p>
          </CardHeader>

          <CardContent className="mt-4">
            <Button className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold text-lg py-6 rounded-full">
              Create Ticket
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
