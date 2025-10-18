import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";

export default function TicketForm() {
  const navigate = useNavigate();

  // States for form logic
  const [department, setDepartment] = useState("");
  const [serviceCategory, setServiceCategory] = useState("");
  const [priority, setPriority] = useState("-");
  const [subject, setSubject] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(10);

  // Handle Department change
  const handleDepartmentChange = (e) => {
    const selectedDept = e.target.value;
    setDepartment(selectedDept);
    setServiceCategory("");
    setPriority("-");
  };

  // Handle Service Category change
  const handleServiceCategoryChange = (e) => {
    const selected = e.target.value;
    setServiceCategory(selected);

    if (selected === "Repair") {
      setPriority("High Priority");
    } else if (selected === "") {
      setPriority("-");
    } else {
      setPriority("Low");
    }
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent submit if any field is empty
    if (!department || !serviceCategory || !subject.trim()) {
      return; // Simply stop submission (same behavior as required)
    }

    setSubmitted(true);
  };

  // Auto redirect after 10 seconds
  useEffect(() => {
    if (submitted) {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev === 1) {
            clearInterval(timer);
            navigate("/create-ticket");
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [submitted, navigate]);

  // ✅ Success Screen
  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <Card className="w-[50%] text-center p-10 shadow-lg rounded-3xl">
          <div className="flex justify-center mb-6">
            <div className="bg-yellow-100 p-8 rounded-full">
              <Check className="text-black w-12 h-12" />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-6">
            Your ticket has been placed!
          </h2>
          <Button
            onClick={() => navigate("/create-ticket")}
            className="bg-green-300 hover:bg-green-400 text-black text-lg font-semibold px-8 py-4 rounded-full"
          >
            Thank you
          </Button>
          <p className="text-gray-500 text-sm mt-4">
            Redirecting in {countdown} seconds...
          </p>
        </Card>
      </div>
    );
  }

  // 🧾 Ticket Form (default)
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

      {/* Form Section */}
      <main className="flex flex-1 justify-center items-center">
        <Card className="w-[70%] max-w-4xl p-6 shadow-lg border border-gray-200">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Ticket Form</CardTitle>
          </CardHeader>

          <CardContent>
            <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
              {/* Department */}
              <div className="col-span-2">
                <label className="block text-sm font-semibold mb-1">
                  Department
                </label>
                <select
                  value={department}
                  onChange={handleDepartmentChange}
                  required
                  className="w-full border rounded-lg p-2"
                >
                  <option value="">Select Department</option>
                  <option value="Information Communication Technology">
                    Information Communication Technology
                  </option>
                </select>
              </div>

              {/* Service Category */}
              <div className="col-span-2">
                <label className="block text-sm font-semibold mb-1">
                  Service Category
                </label>
                <select
                  value={serviceCategory}
                  onChange={handleServiceCategoryChange}
                  required
                  className="w-full border rounded-lg p-2"
                >
                  <option value="">Select Category</option>
                  <option value="Repair">Repair</option>
                </select>
              </div>

              {/* Subject */}
              <div className="col-span-2">
                <label className="block text-sm font-semibold mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Brief description of your issue"
                  className="w-full border rounded-lg p-2"
                  required
                />
              </div>

              {/* Additional Info */}
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Additional Information
                </label>
                <input
                  type="text"
                  placeholder="Any additional information"
                  className="w-full border rounded-lg p-2"
                />
              </div>

              {/* Priority Level */}
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Priority Level
                </label>
                <input
                  type="text"
                  value={priority}
                  readOnly
                  className="w-full border rounded-lg p-2 bg-gray-100"
                />
              </div>

              {/* Buttons */}
              <div className="col-span-2 flex justify-center gap-6 mt-6">
                <Button
                  type="button"
                  onClick={() => navigate("/create-ticket")}
                  variant="outline"
                  className="w-40 border-2 border-green-700 text-green-700 rounded-full"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  className="w-40 bg-green-700 hover:bg-green-800 text-white rounded-full"
                >
                  Submit
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
