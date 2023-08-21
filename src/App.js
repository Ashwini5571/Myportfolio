import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./Components/Home/Home1";
import { Aboutone } from "./Components/About/About1";
import { Blogs } from "./Components/Blog/Blog1";
import { Resume1 } from "./Components/Resume/Resume1";
import { Contact1 } from "./Components/Contact/Contact1";

function App() {
  return (
    <div>
      <BrowserRouter basename="Myportfolio">
        <Routes>
          <Route path="/" index element={<Homepage />}></Route>
          <Route path="/about" element={<Aboutone />}></Route>
          <Route path="/blog" element={<Blogs />}></Route>
          <Route path="/resume" element={<Resume1 />}></Route>
          <Route path="/contact" element={<Contact1 />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Homepage></Homepage> */}
      {/* <Aboutone></Aboutone> */}
      {/* <Blogs></Blogs> */}
      {/* <Resume1></Resume1> */}
      {/* <Contact1></Contact1> */}
    </div>
  );
}

export default App;
