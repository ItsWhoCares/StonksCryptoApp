import { useState, useEffect } from "react";


const useDebounce = (initialValue, delay) => {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        const timer = setTimeout(() => {
            setValue(initialValue);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [initialValue, delay]);

    return [value, setValue];
};
