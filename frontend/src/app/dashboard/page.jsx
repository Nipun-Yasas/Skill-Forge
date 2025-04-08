"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import Link from "next/link";
import TopNav from "../(components)/TopNav"; // Import TopNav
import SideNav from "../(components)/SideNav"; // Import SideNav

const Dashboard = () => {
  const { user, token, logout } = useAuth();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push("/login"); // Redirect to login if not authenticated
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/getuser`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Error fetching user data");
        if (err.response?.status === 401) {
          logout(); // Log out if token is invalid
          router.push("/login");
        }
      }
    };

    fetchUserData();
  }, [token, router, logout]);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Top Navigation */}
      <TopNav />

      <div className="flex flex-1">
        {/* Side Navigation */}
        <SideNav />

        {/* Main Content */}
        <main className="flex-1 ml-64 mt-16 p-6"> {/* Adjust margins for TopNav and SideNav */}
          <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {userData && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">Welcome, {userData.fullName}!</h2>
              <p className="mt-2">Email: {userData.email}</p>
              <p className="mt-2">Last Seen: {userData.lastSeen || "N/A"}</p>
              {userData.profileImageUrl && (
                <img
                  src={userData.profileImageUrl}
                  alt="Profile"
                  className="mt-4 w-24 h-24 rounded-full"
                />
              )}
            </div>
          )}
          <div className="flex flex-col space-y-4 mt-6">
            <Link href="/edit-profile">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                Edit Profile
              </button>
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
            >
              Log Out
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;