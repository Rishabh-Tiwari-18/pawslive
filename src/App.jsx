import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";
import BookModal from "./componets/BookModal";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Hero from "./componets/Hero";
import ServiceCard from "./componets/ServiceCard";
// import ResetOnRefresh from "./componets/RefreshOnRefresh";

function App() {
  const [user, setUser] = useState(null);
  const [isBookOpen, setIsBookOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("pawslive_user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const handleLogin = (u) => {
    localStorage.setItem("pawslive_user", JSON.stringify(u));
    setUser(u);
  };

  const handleLogout = () => {
    localStorage.removeItem("pawslive_user");
    setUser(null);
  };

  return (
    <>
      {/* <ResetOnRefresh /> */}

      <div className="min-h-screen flex flex-col smooth-scroll">
        <Navbar
          user={user}
          onLogout={handleLogout}
          onOpenBook={() => setIsBookOpen(true)}
        />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <Home onOpenBook={() => setIsBookOpen(true)} user={user} />
              }
            />
            <Route
              path="/about"
              element={<About onOpenBook={() => setIsBookOpen(true)} />}
            />

        

            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route
              path="/contact"
              element={<Contact onOpenBook={() => setIsBookOpen(true)} />}
            />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
          </Routes>
        </main>

        <Footer onOpenBook={() => setIsBookOpen(true)} />
        <BookModal open={isBookOpen} onClose={() => setIsBookOpen(false)} />
      </div>
    </>
  );
}

export default App;
