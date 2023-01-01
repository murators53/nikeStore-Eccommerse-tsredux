import logo from '../assets/logo.png'
import {useState, useEffect} from 'react'
import { HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon } from  '@heroicons/react/24/outline'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { selectGetTotalQuantity, setOpenCart } from '../redux/CartSlice'
const Navbar = () => {
    const [navState, setNavState]=useState(false)
    const dispatch = useAppDispatch()
    const quantityItems = useAppSelector(selectGetTotalQuantity)

    const onCartToggle = () => {
        dispatch(setOpenCart({
            cartState:true
        }))
    }

    const onNavScrool = () => {
        if (window.scrollY > 30) {
            setNavState(true)
        } else {
            setNavState(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',onNavScrool);

        return () => {
            window.removeEventListener('scroll',onNavScrool)
        }
      
    }, [])

    return (
        <>
            <header className={ !navState ?  'absolute top-7 left-0 right-0 opacity-100 z-50'
            :'fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme'}>
                <nav className='flex items-center justify-between nike-container'>
                    <div className='flex items-center'>
                        <img src={logo} alt="logo/img" className={`w-16 h-auto ${navState && "filter brightness-0"} `}/>
                    </div>
                    <ul className='flex items-center justify-center gap-2'>
                        <li className='grid items-center '>
                            <MagnifyingGlassIcon 
                            className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`}/>
                        </li>
                        <li className='grid items-center '>
                            <HeartIcon  className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`}/>
                        </li>
                        <li className='grid items-center '>
                            <button type='button' onClick={onCartToggle}
                             className='border-none outline-none
                            active:scale-110 transition-all duration-300 relative'>
                                <ShoppingBagIcon className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`} />
                                <div className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight
                                font-medium rounded-full flex items-center justify-center
                                cursor-pointer hover:scale-110 transition-all duration-300 ${navState ? 
                                "bg-slate-900 text-slate-100 shadow-slate-900":
                                "bg-slate-100 text-slate-900 shadow-slate-100"}`}>{quantityItems}</div>
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar