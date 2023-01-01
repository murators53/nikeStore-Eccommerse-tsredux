import React, { useEffect } from 'react'
import { selectCartItems, selectCartState, selectGetTotalPrice, selectGetTotalQuantity, setClearCartItems, setCloseCart, setGetTotals } from '../redux/CartSlice'
import { useAppDispatch, useAppSelector } from '../redux/store'
import CartCount from './cart/CartCount'
import CartEmpty from './cart/CartEmpty'
import CartItem from './cart/CartItem'

const Cart = () => {
  const dispatch = useAppDispatch()
  const ifCartState = useAppSelector(selectCartState)
  const cartItems = useAppSelector(selectCartItems)
  const totalPrice = useAppSelector(selectGetTotalPrice)
  const quantityItems = useAppSelector(selectGetTotalQuantity)

  useEffect(()=>{
    dispatch(setGetTotals())
  },[cartItems, dispatch])
  
  const onCartToggle = () => {
    dispatch(setCloseCart({
      cartState: false
    }))
  }

  const onClearCartItem = () => {
    dispatch(setClearCartItems())
  }

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme duration-500
        w-full h-screen opacity-100 z-[250] ${ifCartState ?
          'opacity-100 visible translate-x-0' : 
          'opacity-0 invisible translate-x-8'}
        `}>
        <div className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}>
          <CartCount onCartToggle={onCartToggle} onClearCartItem={onClearCartItem}  quantityItems={quantityItems}/>
          
          {cartItems.length === 0 ? <CartEmpty onCartToggle={onCartToggle} /> : <div>
              <div className='flex items-center justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll
              h-[81vh] scroll-hidden py-3'>
              {cartItems?.map((item:any, i:number) => (
                <CartItem key={i} {...item} />
              ))}
              </div>

                <div className='fixed bottom-0 bg-white w-full px-6 py-2 grid items-center'>
                  <div className='flex items-center justify-between'>
                    <h1 className='text-base font-semibold'>SubTotal</h1>
                    <h1 className='text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5'>$ {totalPrice}</h1>
                  </div>
                  <div className='grid items-center gap-2'>
                    <p className='text-sm font-medium text-center'>Taxes and Shipping Will Calculate At Shipping</p>
                    <button type='button' className='button-theme bg-theme-cart text-white'>Check Out</button>
                  </div>
                </div>

            </div>}

        </div>
      </div>
    </>
  )
}

export default Cart

/* 

 ${ifCartState ? 
        'opacity-100 visible translate-x-0':'blur-effect-theme h-screen max-w-xl w-full absolute'}
*/