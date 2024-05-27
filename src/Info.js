import React from 'react';
import { Card } from 'flowbite-react';
import icon from "./imgs/icon.jpg";

function Info({ dados }) {
  return (
    <div className='flex flex-wrap p-4 justify-center'>
        {dados.results.map((person, index) => (
            <Card 
            className='w-60 text-center m-0.5' 
            key={index}
            imgSrc={icon}
            >
                <h3 className='font-bold text-xl'>{person.name}</h3>
                <p>Altura: {person.height}</p>
                <p>Peso: {person.mass}</p>
                <p>Cor do cabelo: {person.hair_color}</p>
                <p>Cor dos olhos: {person.eye_color}</p>
            </Card>
        ))}
    </div>
  );
}

export default Info;
