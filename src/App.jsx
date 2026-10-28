import { Routes, Route } from "react-router-dom";
import Navbar from "./compoents/Navbar";
import ScrollToHash from "./compoents/ScrollToHash";
import Hero from "./Sections/Hero";
import Profile from "./Sections/Profile";
import Work from "./Sections/Work";
import Stack from "./Sections/Stack";
import Contact from "./Sections/Contact";
import WorkPage from "./Pages/WorkPage";
import AboutPage from "./Pages/AboutPage";
import ConnectPage from "./Pages/ConnectPage";

function Home() {
  return (
    <>
      <Hero />
      <Profile />
      <Work />
      <Stack />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/connect" element={<ConnectPage />} />
        </Routes>
      </main>
    </>
  );
}