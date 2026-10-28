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
import Reveal from "./compoents/Reveal";
function Home() {
  return (
    <>
    <Reveal threshold={0.05}>
      <Hero />
    </Reveal>
    <Reveal threshold={0.05}>
      <Profile />
    </Reveal>
    <Reveal threshold={0.05}>
      <Work />
    </Reveal>
    <Reveal threshold={0.05}>
      <Stack />
    </Reveal>
    <Reveal threshold={0.05}>
      <Contact />
    </Reveal>
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