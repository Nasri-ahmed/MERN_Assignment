import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Planet() {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://swapi.dev/api/planets/${id}`)
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(data => setPlanet(data))
      .catch(() => setError(true));
  }, [id]);

  if (error) {
    return (
      <div>
        <p>These aren't the droids you're looking for</p>
        
      </div>
    );
  }

  if (!planet) return <p>Loading...</p>;

  return (
    <div>
      <h2>{planet.name}</h2>
      <p><strong>Climate:</strong> {planet.climate}</p>
      <p><strong>Terrain:</strong> {planet.terrain}</p>
      <p><strong>Population:</strong> {planet.population}</p>
      <p><strong>Gravity:</strong> {planet.gravity}</p>
    </div>
  );
}

export default Planet;
