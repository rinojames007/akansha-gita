import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Notification from "./pages/Notification";
import Help from "./pages/Help";
import Landing from "./pages/Landing";
import Resistration from "./pages/Resistration";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/resister" element={<Resistration/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </BrowserRouter>
  );
}
