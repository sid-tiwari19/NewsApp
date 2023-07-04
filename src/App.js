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
  const [final, setFinal] = useState(null);
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
          setFinal={setFinal}
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
                yo=""
                pageSize={pageSize}
                country="in"
                category=""
                docColor={docColor}
                final={final}
              />
            }
          />
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                progress={progress}
                key="Business"
                yo="Business"
                pageSize={pageSize}
                country="in"
                category="business"
                docColor={docColor}
                final={final}
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
                key="Sports"
                yo="Sports"
                pageSize={pageSize}
                country="in"
                category="sports"
                docColor={docColor}
                final={final}
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
                key="Science and Technology"
                yo="Science and Technology"
                pageSize={pageSize}
                country="in"
                category="science|technology"
                docColor={docColor}
                final={final}
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
                key="Entertainment"
                yo="Entertainment"
                pageSize={pageSize}
                country="in"
                category="entertainment|bollywood|hollywood"
                docColor={docColor}
                final={final}
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
                key="Politics"
                yo="Politics"
                pageSize={pageSize}
                country="in"
                category="politics"
                docColor={docColor}
                final={final}
              />
            }
          />
          <Route
            exact
            path="/lifestyle"
            element={
              <News
                setProgress={setProgress}
                progress={progress}
                key="Lifestyle"
                yo="Lifestyle"
                pageSize={pageSize}
                country="in"
                category="lifestyle"
                docColor={docColor}
                final={final}
              />
            }
          />
          <Route
            exact
            path="/world"
            element={
              <News
                setProgress={setProgress}
                progress={progress}
                key="World"
                yo="World"
                pageSize={pageSize}
                country="in"
                category="world"
                docColor={docColor}
                final={final}
              />
            }
          />
          <Route
            exact
            path="/india"
            element={
              <News
                setProgress={setProgress}
                progress={progress}
                key="India"
                yo="India"
                pageSize={pageSize}
                country="in"
                category="india"
                docColor={docColor}
                final={final}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
