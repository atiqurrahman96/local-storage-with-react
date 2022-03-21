import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';



const Cosmetics = () => {
    const [cosmetics, setCosmetic] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetic(data))
    }, [cosmetics])
    return (
        <div>
            <h1>Welcome, to my mart</h1>

            {
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>)
            }
        </div >
    );
};

export default Cosmetics;