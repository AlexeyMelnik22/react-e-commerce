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
            .then(jsonData => {
                // Перевіряємо, чи повернутий результат є об'єктом, але НЕ масивом
                if (jsonData && typeof jsonData === 'object' && !Array.isArray(jsonData)) {

                    // Object.values бере всі значення об'єкта (без ключів)
                    // .find шукає серед них перше значення, яке є масивом
                    const arrayData = Object.values(jsonData).find(item => Array.isArray(item));

                    if (arrayData) {
                        // Якщо масив знайдено (наприклад, під ключем "reviews" чи "products")
                        setData(arrayData);
                    } else {
                        // Якщо масивів всередині немає, просто зберігаємо сам об'єкт
                        setData(jsonData);
                    }
                } else {
                    // Якщо jsonData - це вже масив (старий формат JSON)
                    setData(jsonData);
                }
            })
            .catch(setError)
            .finally(() => setLoading(false));
    }, [url]); //

    return { data, loading, error };
}

export default useFetch;