import { useState, useEffect } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`/react-clothes-project/${url}`)
            .then(res => {
                if (!res.ok) throw new Error('Loading Error');
                return res.json();
            })
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false));
    }, [url]); //

    return { data, loading, error };
}

export default useFetch;