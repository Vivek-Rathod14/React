import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOutUser } from "../store/authActions";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading } = useSelector((s) => s.auth || {});

  const handleSignOut = async () => {
    await dispatch(signOutUser());
    navigate("/auth");
  };

  if (!user) {
    return (
      <div className="bg-white p-6 rounded shadow text-center">
        <p className="text-slate-600">Please sign in first.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded shadow max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Your Profile</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-600">
            Email
          </label>
          <p className="mt-1 text-lg text-slate-900">{user.email}</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600">
            User ID
          </label>
          <p className="mt-1 text-sm text-slate-700 break-all">{user.uid}</p>
        </div>

        <button
          onClick={handleSignOut}
          disabled={loading}
          className="w-full mt-6 p-3 bg-red-600 text-white rounded font-semibold hover:bg-red-700 disabled:opacity-50"
        >
          {loading ? "Signing Out..." : "Sign Out"}
        </button>
      </div>
    </div>
  );
}
