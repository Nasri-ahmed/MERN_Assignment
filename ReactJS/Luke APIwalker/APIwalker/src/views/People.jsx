import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function People() {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [homeworld, setHomeworld] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${id}`)
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(data => {
        setPerson(data);
        return fetch(data.homeworld);
      })
      .then(res => res.json())
      .then(hw => setHomeworld(hw))
      .catch(() => setError(true));
  }, [id]);

  if (error) {
    return (
      <div>
        <p>These aren't the droids you're looking for</p>
        <img src="https://i.imgur.com/J3ai5QF.jpeg" alt="Obi-Wan" />
      </div>
    );
  }

  if (!person) return <p>Loading...</p>;

  const homeworldId = person.homeworld.split('/').filter(Boolean).pop();

  return (
    <div>
      <h2>{person.name}</h2>
      <p><strong>Height:</strong> {person.height} cm</p>
      <p><strong>Hair Color:</strong> {person.mass} kg</p>
      <p><strong>Eye Color:</strong> {person.eye_color}</p>
      <p><strong>Skin Color:</strong> {person.skin_color}</p>
      {homeworld && (
        <p>
          <strong>Homeworld:</strong>{' '}
          <Link to={`/planets/${homeworldId}`}>homeworld</Link> ({homeworld.name})
        </p>
      )}
    </div>
  );
}

export default People;
