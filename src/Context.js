import React, { useContext, useEffect, useState } from "react";
const AppContext = React.createContext();
const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppProvider = ({ children }) => {
    const [movie, setMovie] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState({ show: "false", msg: "" });
    const [query, setQuery] = useState("avenger");
    const getMovie = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.Response === "True") {
                setIsLoading(false);
                setMovie(data.Search || data);
                setIsError({ show: "false", msg: "" });
            } else {
                setIsError({ show: "true", msg: data.Error });
            }
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        let timer = setTimeout(() => {
            getMovie(`${API_URL}&s=${query}`);
        }, 800);
        return () => clearTimeout(timer);
    }, [query]);
    return (
        <AppContext.Provider
            value={{ movie, isLoading, isError, query, setQuery }}
        >
            {children}
        </AppContext.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
