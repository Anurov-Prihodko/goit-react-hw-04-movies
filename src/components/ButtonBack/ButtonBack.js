import { Link } from 'react-router-dom';

export default function ButtonBack({ way }) {
  return (
    <button>
      <Link to={way}>⬅ Go back</Link>
    </button>
  );
}
