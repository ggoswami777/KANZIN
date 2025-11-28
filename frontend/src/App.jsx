import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "remixicon/fonts/remixicon.css";
import Kanzin from "./pages/Kanzin/Kanzin";
import Basics from "./pages/Basics/Basics";
import IntroductionBasics from "./pages/Basics/IntroductionBasics/IntroductionBasics";
import ContentBasics from "./pages/Basics/ContentBasics/ContentBasics";
import N5 from "./pages/N5/N5";
import IntroductionN5 from "./pages/N5/IntroductionN5/IntroductionN5";
import ContentN5 from "./pages/N5/ContentN5/ContentN5";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Kanzin" element={<Kanzin />} />
      <Route path="/Kanzin/basics" element={<Basics />}>
        <Route path="introduction" element={<IntroductionBasics />} />
        <Route path="content" element={<ContentBasics />} />
      </Route>
      <Route path="/Kanzin/N5" element={<N5/>}>
        <Route path="introduction" element={<IntroductionN5 />} />
        <Route path="content" element={<ContentN5/>} />
      </Route>
    </Routes>
  );
}
