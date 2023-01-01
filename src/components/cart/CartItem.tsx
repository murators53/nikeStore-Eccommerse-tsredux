import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { ICartItems } from '../../data/data';
import { setDecreaseCartItems, setIncreaseCartItems, setRemoveItemFormToCart } from '../../redux/CartSlice';
import { useAppDispatch } from '../../redux/store';

const CartItem: React.FC<ICartItems> = ({ id, title, text, img, color, shadow, price, cartQuantity }) => {
  const dispatch = useAppDispatch()

  const onRemoveCartItem = (id:string) => {
    dispatch(setRemoveItemFormToCart(id))
  }
  
  const onDecreaseItem = (id:string) => {
    dispatch(setDecreaseCartItems(id))
  }

  const onIncreaseItem = (id:string) => {
    dispatch(setIncreaseCartItems(id))
  }

  return (
    <>
      <div className='flex items-center justify-between w-full px-5 '>
        <div className='flex items-center gap-5'>
          <div className={` bg-gradient-to-b ${color} ${shadow} relative rounded p-3 hover:scale-105
          transition-all duration-75 ease-in-out grid items-center`}>
            <img src={img} alt={`img/cart-item/${id}`} className='w-36 h-auto object-fill lg:w-28' />
          </div>
          <div className='grid items-center gap-4'>
            <div className='grid items-center leading-none'>
              <h1 className='font-medium text-lg text-slate-900 lg:text-sm'>{title}</h1>
              <p className='text-sm text-slate-800 lg:text-xs'>{text}</p>
            </div>
            <div className='flex items-center justify-around w-full'>
              <button type='button' onClick={()=>onDecreaseItem(id)}
              className='bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90'>
                <MinusIcon className='w-5 h-5 lg:w-4 lg:h-4 text-white storke-[2]' />  </button>
              <div className='bg-theme-cart rounded text-white font-medium lg:text-xs 
              w-7 h-6 flex items-center justify-center'>{cartQuantity}</div>
              <button type='button' onClick={()=>onIncreaseItem(id)}
              className='bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90'>
                <PlusIcon className='w-5 h-5 lg:w-4 lg:h-4 text-white storke-[2]' /></button>
            </div>
          </div>
        </div>
        <div className='grid items-center gap-5'>
          <div className='grid items-center justify-center'>
            <h1 className='text-lg lg:text-base text-slate-900 font-medium
            '>${Number(price) * cartQuantity}</h1>
          </div>
          <div className='grid items-center justify-center'>
            <button type='button' className='bg-theme-cart rounded p-1 lg:p-0.5 grid items-center
            justify-items-center' onClick={()=>onRemoveCartItem(id)}>
              <TrashIcon className='w-5 h-5 text-white' />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartItem

/* 
<div w-full px-5">
        <div >
          <div ${color} ${shadow} relative rounded p-3 hover:scale-105 transition-all duration-75 ease-in-out grid items-center`}>
            <img src={img} alt={`img/cart-item/${id}`} fill lg:w-28" />
            <div blur-theme-effect bg-white/80 text-black text-xs px-1 rounded'>${price}</div>
          </div>
          <div >
            <div >
              <h1 slate-900 lg:text-sm">{title}</h1>
              <p 00 lg:text-xs">{text}</p>
            </div>
            <div w-full">
              <button type="button" onClick={onDecreaseItemQTY} 6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90">
                <MinusIcon w-4 lg:h-4 text-white stroke-[2]" />
              </button>
              <div white font-medium lg:text-xs w-7 h-6 lg:h-5 lg:w-6 flex items-center justify-center">{cartQuantity}</div>
              <button type="button" onClick={onIncreaseItemQTY} 6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90">
                <PlusIcon w-4 lg:h-4 text-white stroke-[2]" />
              </button>
            </div>
          </div>
        </div>
        <div >
          <div >
            <h1 ase text-slate-900 font-medium">${price * cartQuantity}</h1>
          </div>
          <div >
            <button type="button" 1 lg:p-0.5 grid items-center justify-items-center cursor-pointer" onClick={onRemoveItem}>
              <TrashIcon white" />
            </button>
          </div>
        </div>
      </div>
    </>

*/