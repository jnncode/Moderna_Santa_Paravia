import { useState, useEffect } from "react";

/* Allow storage and retrieval state in localStorage (persistent)--taking key and initial state. 

    FYI:
    State management library may be used in terms of better management in states and performance, but the application is not large-scaled.
    Format selection is JSON for readability, interoperability (compatability and coherent data interpretation), and its wide support of systems and languages.

*/
const CurrentScreenState = ((key, initialState) => { // prevent unnecessary re-renders
    const [state, setState] = useState(() => {
        let parsedData;
        try {
            const storedData = localStorage.getItem(key);
            parsedData =  storedData ? JSON.parse(storedData) : initialState;
        } catch (error) {
            console.error(`Error parsing localStorage for key ${key}: `, error);
            parsedData =  initialState;
        }
        return parsedData;
    })

    useEffect(() => {
        let stringifiedData;
        try {
            stringifiedData = JSON.stringify(state);
        } catch (error) {
            console.error(`Error stringifying state for key ${key}: `, error);
            return;
        }
        try { 
            localStorage.setItem(key, stringifiedData);
        } catch (error) {
            console.error(`Error storing state in localStorage for key ${key}: `, error);
        }
    }, [key, state]);

    return [state, setState];
});
export default CurrentScreenState;

