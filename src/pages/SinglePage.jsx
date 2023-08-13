import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

function SinglePage() {
    const [state, setState] = useState({
        isFetched: false,
        data: [],
        error: false
    });
  const {name} = useParams();
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${name}`)
            .then((res) => res.json())
            .then((data) => {
                setState({
                    data: data,
                    isFetched: true,
                    error: false
                });
            })
            .catch((err) => {
                setState({
                    isFetched: true,
                    data: [],
                    error: true
                });
            });
    }, []);

console.log(state.data);

    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => setDarkMode(!darkMode);

    return (
        <>
            <div className={` ${darkMode ? "bg-[#202D36]" : ""}`}>
                <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <div className={`w-3/4 mx-auto ${darkMode ? "bg-[#202D36]" : ""}`}>
                    <button className={`px-12 mb-4 rounded mt-6 py-2 bg-white shadow font-semibold ${darkMode ? "bg-[#2B3743] font-white" : ""}`}>Back</button>
                    {state.data.map((country) => {
                        <div className="flex justify-between items-center">
                            <img src={country.flags.png} className="w-1/3" />

                        </div>
                        
                    })}

                </div>
            </div>
        </>
    )
}
export default SinglePage;
