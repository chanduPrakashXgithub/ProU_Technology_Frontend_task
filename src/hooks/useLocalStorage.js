import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
    const [data, setData] = useState(() => {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(data));
    }, [data]);

    return [data, setData];
}
