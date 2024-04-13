import React from 'react'
import { properties } from '../data'
import { Supply } from './Supply';

export const Properties = () => {

  console.log(properties);

  return (
    <div className="container">
    <div className='d-flex justify-content-center gap-3 flex-wrap p-3 bg-gray '>
    <h3 className='w-100 m-2 '>Aktuális ingatlan kínálatunk</h3>
      
      {properties.map(obj=><Supply key={obj.id} {...obj}/>)}

    </div></div>
  )
}