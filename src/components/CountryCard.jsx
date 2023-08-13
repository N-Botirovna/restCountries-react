// CountryCard.jsx
import { Link } from "react-router-dom";

function CountryCard({ title, flag, population, reg, cap, darkMode }) {
  return (
    <Link to={`/single-page`} className={`text-gray-600  ${darkMode ? 'dark' : ''}`}>
      <li className={`max-w-xs shadow-lg rounded-lg  mb-5 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'}`} 
      // style={{
      //     transition: "transform 0.2s ease",
          
      //     transform: "scale(1)",
      //   }}
      //   onMouseEnter={(e) => {
      //     e.target.style.transform = "scale(1.1)";
      //   }}
      //   onMouseLeave={(e) => {
      //     e.target.style.transform = "scale(1)";
      //   }}
        >
        <img src={flag} alt="Card Img" className="w-full h-48 object-cover" />
        <div className="px-6 py-4">
          <h2 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : ''}`}>{title}</h2>
          <p className={darkMode ? 'font-bold text-white' : 'text-gray-500  font-semibold'}>Population: <span className={darkMode ? 'text-gray-100 font-light' : 'font-light'}>{population}</span></p>
          <p className={darkMode ? 'font-bold text-white' : 'text-gray-500 font-semibold'}>Region: <span className={darkMode ? 'text-gray-100 font-light' : 'font-light'}>{reg}</span></p>
          <p className={darkMode ? 'font-bold text-white' : 'text-gray-500 font-semibold'}>Capital: <span className={darkMode ? 'text-gray-100 font-light' : 'font-light'}>{cap}</span></p>
        </div>
      </li>
    </Link>
  );
}

export default CountryCard;
