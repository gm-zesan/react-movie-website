import React, { useContext, useEffect, useState } from "react";
const AppContext = React.createContext();
const API_URL = `http://www.omdbapi.com/?apikey=727bbdc1&s=avenger`;

const AppProvider = ({ children }) => {
    const [movie, setMovie] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const getMovie = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.Response) {
                setIsLoading(false);
                setMovie(data.Search);
            } else {
                setIsError(true);
            }
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getMovie(API_URL);
    }, []);
    return (
        <AppContext.Provider value={{ movie, isLoading, isError }}>
            {children}
        </AppContext.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
