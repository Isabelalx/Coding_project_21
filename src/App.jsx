import { useState, useEffect } from 'react';
import Gallery from './components/Gallery';

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch('https://course-api.com/react-tours-project');
        if (!response.ok) {
          throw new Error('Failed to fetch tours');
        }
        const data = await response.json();
        setTours(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (tours.length === 0) {
    return (
      <div>
        <h2>No tours left</h2>
        <button onClick={() => window.location.reload()}>Refresh</button>
      </div>
    );
  }

  return <Gallery tours={tours} />;
}

export default App;
