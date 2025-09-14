import React from "react";
import { ThemeProvider } from "./ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import "./App.css";
export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <CTA />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
