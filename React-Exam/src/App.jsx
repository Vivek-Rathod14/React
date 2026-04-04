import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css"
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import MovieSearch from "./components/MovieSearch";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <MovieList />
            </PrivateRoute>
          }
        />

        <Route
          path="/movie/:id"
          element={
            <PrivateRoute>
              <MovieDetails />
            </PrivateRoute>
          }
        />

        <Route
          path="/search"
          element={
            <PrivateRoute>
              <MovieSearch />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;