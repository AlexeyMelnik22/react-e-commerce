import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHashElement = () => {
    const location = useLocation();

    useEffect(() => {
        // Провіряєм , чи є в URL хеш (прикл., #contacts)
        if (location.hash) {
            // забираємо #, щоб отримтаи ID
            const targetId = location.hash.slice(1);

            // чекаємо рендер сторінки
            setTimeout(() => {
                const element = document.getElementById(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        }
    }, [location]); // useEffect срабатывает при каждом изменении location
    return null;
};

export default ScrollToHashElement;