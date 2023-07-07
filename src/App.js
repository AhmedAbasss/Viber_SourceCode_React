import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';

import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import Download from "./pages/Download/Download";
import Features from "./pages/Features/Features";
import Communities from "./pages/Communities/Communities";
import Security from "./pages/Security/Security";
import Test from "./pages/test/Test";
import ViberOut from "./pages/ViberOut/ViberOut";



function App() {
  return (
    <>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/download" element={<Download />} />
            <Route path="/features" element={<Features />} />
            <Route path="/communities" element={<Communities />} />
            <Route path="/security" element={<Security />} />
            <Route path="/viberOut" element={<ViberOut />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  );
}

export default App;
