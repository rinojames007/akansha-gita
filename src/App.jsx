import { BrowserRouter, Routes, Route } from "react-router-dom";
import Events from "./Components/Events/Events";
import Hero from "./Components/Hero/Hero";
import Highlights from "./Components/Highlights/Highlights";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Notification from "./pages/Notification";
import Help from "./pages/Help";
import Landing from "./pages/Landing";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </BrowserRouter>
  );
}
