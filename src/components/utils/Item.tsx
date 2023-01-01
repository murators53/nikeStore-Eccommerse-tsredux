import { ShoppingBagIcon, StarIcon } from '@heroicons/react/24/solid';
import React from 'react'
import { Item1, Item5 } from '../../data/data'
import { setAdditemToCart, setOpenCart } from '../../redux/CartSlice';
import { useAppDispatch } from '../../redux/store';

 

const Item: React.FC<Item1> = ({ ifExists,id, title, text, rating, btn, img, price, color, shadow, }) => {
    const dispatch = useAppDispatch()
    
    const onAddToCart = () => {
        const item:Item5= {id, title, text, img, price, color, shadow}

        dispatch(setAdditemToCart(item));
    }

    const onCartToggle = () => {
        dispatch(setOpenCart({
            cartState:true
        }))
      }

    return (
        <>
            <div className={` relative bg-gradient-to-b ${color} ${shadow} grid items-center 
             rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full 
            hover:scale-105 ${ifExists ? 'justify-items-start':'justify-items-center'}`}>
                <div className={`grid items-center ${ifExists ? 'justify-items-start':'justify-items-center'}
                `}>
                    <h1 className='text-slate-200 text-xl lg:text-lg md:text-base font-medium
                    filter drop-shadow'>{title}</h1>
                    <p className='text-slate-200 filter drop-shadow text-base md:text-sm
                    font-normal'>{text}</p>
                    <div className='flex items-center justify-between w-28 my-2'>
                        <div className='flex items-center bg-white/80 px-1 rounded blur-effect-theme  '>
                            <h1 className='text-black text-sm font-medium'>{price}</h1></div>
                        <div className='flex items-center gap-1'>
                            <StarIcon className='icon-style w-5 h-5 md:w-4 md:h-4' />
                            <h1 className='md:text-sm font-normal text-slate-100'>{rating}</h1></div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <button type='button' className='bg-white/90 blur-effect-theme 
                        button-theme p-0.5 shadow shadow-sky-200 '
                        onClick={()=> onAddToCart()}>
                            <ShoppingBagIcon className='icon-style text-slate-900' />
                        </button>
                        <button type='button' onClick={() => {onAddToCart(); onCartToggle() }}
                         className='bg-white/90 blur-effect-theme py-1 
                        button-theme p-2 shadow shadow-sky-200 text-sm text-black'>{btn}</button>
                    </div>
                </div>
                <div className={`${ifExists ? 'absolute top-5 right-1':'justify-center'}`}>
                    <img src={img} alt={`img/item-img/${id}` }
                        className={`transitions-theme hover:-rotate-12
                        ${ifExists ? 'h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]':'h-36 w-64'}`}
                    />
                </div>
            </div>
        </>
    )
}

export default Item



