import { useState } from 'react';

const phrases = new Map([
['english', 'Happy Birthday'],
['german', 'Alles Gute zum Geburtstag'],
['spanish', 'Feliz Cumpleaños'],
['maori', 'Ra Whānau Kia koe'],
]);

function BirthdayTranslator() {
const [currentLanguage, setCurrentLanguage] = useState('english');
   
    const handleChangeLanguage = (newlang) => {
        setCurrentLanguage(newlang);
    };

return (
    
<div className="BirthdayTranslator componentBox"> 
<h3>{phrases.get(currentLanguage)}!</h3>
<button onClick={() =>
handleChangeLanguage('english')}>English</button>
<button onClick={() =>
handleChangeLanguage('german')}>German</button>
<button onClick={() =>
handleChangeLanguage('spanish')}>Spanish</button>
<button onClick={() =>
handleChangeLanguage('maori')}>Maori</button>
</div>
);
}

export default BirthdayTranslator;