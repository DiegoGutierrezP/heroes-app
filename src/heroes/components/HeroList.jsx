import React, { useEffect, useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers';
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {
       
    const heroes = useMemo(()=> getHeroesByPublisher(publisher),[publisher]);//si recibe 2 parametros en el array tambien se deben poner

  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
        {
            heroes.map(hero => (
                <HeroCard key={hero.id} {...hero} />
            ))
        }
    </div>
  )
}
