import { useState, useEffect } from 'react';
import Gallery from './components/Gallery';

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTours = async () => {
    try {
      const response = await fetch('/tours.json');
      if (!response.ok) {
        throw new Error('Failed to fetch tours');
      }
      const data = await response.json();
      console.log('Fetched tours:', data); // You can keep or remove this line later
      setTours(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

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
        <button onClick={fetchTours}>Refresh</button>
      </div>
    );
  }

  return (
    <main>
      <h1>Our Tours</h1>
      <Gallery tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
