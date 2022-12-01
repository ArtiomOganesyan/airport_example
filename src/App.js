import { useEffect, useState } from 'react';
import './App.css';
import Footer from './features/Footer/Footer';
import Navbar from './features/Navbar/Navbar';
import Home from './pages/Home';
import Loading from './pages/Loading';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => {
      setLoading(false);
    }, 1400);

    return () => {
      clearTimeout(id);
    };
  }, []);

  return (
    <div className="App">

      {
      loading
        ? (<Loading />) : (
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        )
    }

    </div>
  );
}

export default App;
