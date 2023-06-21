import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import About from "./components/About";

const App = () => {
  const pageSize = 9;
  const [progress, setProgress] = useState(0);
  const [loadingColor, setLoadingColor] = useState("red");
  const [docColor, setDocColor] = useState("White");
  const [lang1, setLang1] = useState("en");
  const [lang2, setLang2] = useState("hi");
  const setLang = () => {
    if (lang1 === "en") {
      setLang1("hi");
      setLang2("en");
    } else {
      setLang1("en");
      setLang2("hi");
    }
  };
  const toggleLoadingMode = (color) => {
    setLoadingColor(color);
  };
  const toggleBgMode = (color) => {
    setDocColor(color);
  };

  return (
    <div className={docColor}>
      <Router>
        <Navbar
          toggleLoadingMode={toggleLoadingMode}
          toggleBgMode={toggleBgMode}
          lang1={lang1}
          lang2={lang2}
          setLang={setLang}
        />
        <LoadingBar color={loadingColor} progress={progress} height={4} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                progress={progress}
                key="g"
                pageSize={pageSize}
                country="in"
                category="news"
                docColor={docColor}
                lang1={lang1}
                setLang={setLang}
              />
            }
          />
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/world"
            element={
              <News
                setProgress={setProgress}
                progress={progress}
                key="world"
                pageSize={pageSize}
                country="in"
                category="world"
                docColor={docColor}
                lang1={lang1}
                setLang={setLang}
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                progress={progress}
                key="business"
                pageSize={pageSize}
                country="in"
                category="business"
                docColor={docColor}
                lang1={lang1}
                setLang={setLang}
              />
            }
          />
          <Route
            exact
            path="/sport"
            element={
              <News
                setProgress={setProgress}
                progress={progress}
                key="sport"
                pageSize={pageSize}
                country="in"
                category="sport"
                docColor={docColor}
                lang1={lang1}
                setLang={setLang}
              />
            }
          />
          <Route
            exact
            path="/tech"
            element={
              <News
                setProgress={setProgress}
                progress={progress}
                key="tech"
                pageSize={pageSize}
                country="in"
                category="tech"
                docColor={docColor}
                lang1={lang1}
                setLang={setLang}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                progress={progress}
                key="entertainment"
                pageSize={pageSize}
                country="in"
                category="entertainment"
                docColor={docColor}
                lang1={lang1}
                setLang={setLang}
              />
            }
          />
          <Route
            exact
            path="/beauty"
            element={
              <News
                setProgress={setProgress}
                progress={progress}
                key="beauty"
                pageSize={pageSize}
                country="in"
                category="beauty"
                docColor={docColor}
                lang1={lang1}
                setLang={setLang}
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                progress={progress}
                key="science"
                pageSize={pageSize}
                country="in"
                category="science"
                docColor={docColor}
                lang1={lang1}
                setLang={setLang}
              />
            }
          />
          <Route
            exact
            path="/finance"
            element={
              <News
                setProgress={setProgress}
                progress={progress}
                key="finance"
                pageSize={pageSize}
                country="in"
                category="finance"
                docColor={docColor}
                lang1={lang1}
                setLang={setLang}
              />
            }
          />
          <Route
            exact
            path="/politics"
            element={
              <News
                setProgress={setProgress}
                progress={progress}
                key="politics"
                pageSize={pageSize}
                country="in"
                category="politics"
                docColor={docColor}
                lang1={lang1}
                setLang={setLang}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
