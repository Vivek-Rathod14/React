import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOutUser } from "../store/authActions";

export default function Navbar() {
  const dispatch = useDispatch();
  const { user } = useSelector((s) => s.auth || {});

  const handleSignOut = async () => {
    await dispatch(signOutUser());
  };

  return (
    <nav className="bg-white border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold text-slate-900">
          Movie Library
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-slate-700 hover:text-slate-900">Popular</Link>
          <Link to="/search" className="text-slate-700 hover:text-slate-900">Search</Link>
          {user && (
            <>
              <Link to="/movies/add" className="text-slate-700 hover:text-slate-900">Add Movie</Link>
              <Link to="/profile" className="text-slate-700 hover:text-slate-900">Profile</Link>
              <button
                onClick={handleSignOut}
                className="text-slate-700 hover:text-slate-900 font-medium"
              >
                Sign Out
              </button>
            </>
          )}
          {!user && (
            <Link to="/auth" className="text-slate-700 hover:text-slate-900 font-medium">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
