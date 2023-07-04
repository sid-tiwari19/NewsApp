import React, { useState } from "react";
import NewsContext from "./NewsContext";

const NewsState = () => {
  const [lang, setLang] = useState("en");

  return (
    <div>
      <NewsContext.Provider value={{ lang, setLang }}></NewsContext.Provider>
    </div>
  );
};
export default NewsState;
