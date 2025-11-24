import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "remixicon/fonts/remixicon.css";
import Kanzin from "./pages/Kanzin/Kanzin";
import Basics from "./pages/Basics/Basics";
import IntroductionBasics from "./pages/Basics/IntroductionBasics/IntroductionBasics";
import ContentBasics from "./pages/Basics/ContentBasics/ContentBasics";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Kanzin" element={<Kanzin />} />
      <Route path="/Kanzin/basics" element={<Basics />}>
        <Route path="introduction" element={<IntroductionBasics />} />
        <Route path="content" element={<ContentBasics />} />
      </Route>
    </Routes>
  );
}
