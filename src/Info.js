import React from 'react';
import { Card } from 'flowbite-react';
import placeholder from "./imgs/placeholder.jpg";

// Import all images from the './imgs' directory
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('./imgs', false, /\.(jpg)$/));

function Info({ dados }) {
  return (
    <div className='flex flex-wrap py-4 justify-center'>
        {dados.results.map((person, index) => {
            // Check if there is an image with the same name as person.name
            const image = images[`${person.name.toLowerCase()}.jpg`] || placeholder;
            return (
                <Card 
                    className='w-64 text-center m-1 bg-black text-white border-2 border-blue-600' 
                    key={index}
                    imgSrc={image}
                >
                    <h3 className='font-bold text-xl'>{person.name}</h3>
                    <p>Height: {person.height / 100} m</p>
                    <p>Weight: {person.mass} kg</p>
                    <p>Hair color: {person.hair_color}</p>
                    <p>Eye color: {person.eye_color} <span className={`eye-${person.eye_color.replace(/, | /g, '-')} color-box text-transparent border border-white`}>-=-</span></p>
                </Card>
            );
        })}
    </div>
  );
}

export default Info;
