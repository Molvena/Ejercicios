import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Languagesp, Moviesp,Songsheardp, Readp, Sportsp } from "./pages/index.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="Languages" element={<Languagesp />} />
          <Route path="Movies" element={<Moviesp />} />
          <Route path="Songsheard" element={<Songsheardp />} />
          <Route path="Read" element={<Readp />} />
          <Route path="Sports" element={<Sportsp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
