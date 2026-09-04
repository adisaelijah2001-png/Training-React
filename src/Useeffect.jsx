import {  useEffect, useState } from "react";

const UseEffect = () => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortconst = new AbortController();
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Failed to fetch data');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(error => {
                    setError(error.message);
                    setIsPending(false);
                });
        }, 1000);
    }, []);

    return () => abortconst.abort();
}
 
export default UseEffect;