import React from 'react'
import { IPopularSales, ITopRatesSlaes } from '../data/data';
import Item from './utils/Item'
import Title from './utils/Title'

const Sales:React.FC< ITopRatesSlaes> = ({items,ifExists,title}) => {
  return (
    <>
      <div className='nike-container'>
        <Title title={title}/>
        <div className={`grid items-center justify-items-center grid-cols-4 xl:grid-cols-3 
        md:grid-cols-2 sm:grid-cols-1 gap-7 lg:gap-5 mt-7
          ${ifExists ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1':'grid-cols-4 xl:grid-cols-3md:grid-cols-2 sm:grid-cols-1'}
        `}>
          {items?.map((item, i) => (
            <Item {...item} key={i} ifExists={ifExists}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default Sales