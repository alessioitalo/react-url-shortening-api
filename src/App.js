import Header from "./components/Header";
import StatisticsContainer from "./components/StatisticsContainer";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Shortener from "./components/Shortener";
import Context from "./context";
import { useState, useEffect } from "react";

function App() {
  const [url, setUrl] = useState();
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState();
  const [data, setData] = useState(Object.keys(localStorage));

  useEffect(() => {
    setCounter(localStorage.length);
  }, [counter, data]);

  const setUrlHandler = (url) => {
    setUrl(url);
  };

  const setLoadingHandler = (boolean) => {
    setLoading(boolean);
  };

  return (
    <div className="App">
      <Context.Provider
        value={{
          url,
          loading,
          counter,
          data,
          setUrlHandler,
          setLoadingHandler,
          setData,
        }}
      >
        <Header />
        <Shortener />
        <StatisticsContainer />
      </Context.Provider>
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
