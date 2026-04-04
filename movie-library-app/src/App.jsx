import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navbar from "./components/Navbar";
import PopularPage from "./pages/PopularPage";
import SearchPage from "./pages/SearchPage";
import DetailsPage from "./pages/DetailsPage";
import AddMoviePage from "./pages/AddMoviePage";
import EditMoviePage from "./pages/EditMoviePage";
import ProfilePage from "./pages/ProfilePage";
import AuthPage from "./pages/AuthPage";
import PrivateRoute from "./routes/PrivateRoute";
import { loadUser } from "./store/authActions";

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUser());
    }, [dispatch]);

    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="container mx-auto px-4 py-6">
                <Routes>
                    <Route path="/" element={<PopularPage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/movie/:id" element={<DetailsPage />} />
                    <Route path="/movies/add" element={<PrivateRoute><AddMoviePage /></PrivateRoute>} />
                    <Route path="/movies/:id/edit" element={<PrivateRoute><EditMoviePage /></PrivateRoute>} />
                    <Route
                        path="/profile"
                        element={
                            <PrivateRoute>
                                <ProfilePage />
                            </PrivateRoute>
                        }
                    />
                    <Route path="/auth" element={<AuthPage />} />
                </Routes>
            </main>
        </div>
    );
}
