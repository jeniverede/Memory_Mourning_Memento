/* React */
import { Routes, Route } from "react-router-dom";

/* import Components */
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Exhibition } from "./components/Exhibition";
import { Mourning } from "./components/Mourning";
import { Memory } from "./components/Memory";
import { Memento } from "./components/Memento";
import { DesignVenue } from "./components/DesignVenue";
import { PromotionalMaterial } from "./components/PromotionalMaterial";
import { About } from "./components/About";
import { Credits } from "./components/Credits";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";
import { Error } from './components/Error';

/* import Styles */
import './App.css';
import './Typography.css';

export function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="exhibition/" element={<Exhibition />} />
        {/* exhibition/ allows access to the nested pages Exhibition.jsx*/}
        <Route path="mourning" element={<Mourning />} />
        <Route path="memory" element={<Memory />} />
        <Route path="memento" element={<Memento />} />
        <Route path="design-venue" element={<DesignVenue />} />
        <Route path="promotional-material" element={<PromotionalMaterial />} />
        <Route path="about" element={<About />} />
        <Route path="credits" element={<Credits />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
        {/* Error handling route */}
      </Routes>
      <Footer />
      <BackToTop/>
    </>
  );
}


