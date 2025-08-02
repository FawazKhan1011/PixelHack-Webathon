import { useState } from "react";
import Loader from "./components/loader.jsx";
import MainSite from './components/MainSite.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <Loader onComplete={() => setIsLoading(false)} />
      ) : (
        <MainSite />
      )}
    </>
  );
}

export default App;
