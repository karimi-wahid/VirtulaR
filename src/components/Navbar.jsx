import logo from '../assets/logo.png'
import {navItems} from '../constants/index'
import { Link } from 'react-router-dom'
import {Menu, X} from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const mobileDrawerToggle = () =>{
        setMobileDrawerOpen(!mobileDrawerOpen)
    }
   
  return (
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
        <div className=' container px-4 mx-auto relative text-sm'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center flex-shrink-0'>
                    <img className=' h-10 w-10' src={logo} alt="logo" />
                    <span className='text-xl tracking-tight'>VirtualR</span>
                </div>
                <ul className='hidden lg:flex ml-14 space-x-12'>
                    {navItems.map((item, index) =>{
                        return <li key={index}>
                            <Link to={item.href}>{item.label}</Link>
                        </li>
                    })
                    }
                </ul>
                <div className='hidden lg:flex justify-center space-x-12 items-center'>
                    <Link to='#' className='py-2 px-3 border rounded-md'>Sign In</Link>
                    <Link to='#' className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>Create an account</Link>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={mobileDrawerToggle}>
                        {mobileDrawerOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            {
                mobileDrawerOpen && (
                    <div className='fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden'>
                        <ul>
                            {navItems.map((item, index) => {
                               return <li key={index} className='py-4'>
                                    {item.label}
                                </li>
                            })}
                        </ul>
                        <div className="flex space-x-6">
                            <Link to='#' className='py-2 px-3 border rounded-md'>Sign In</Link>
                            <Link to='#' className='py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800'>Create an Account</Link>
                        </div>
                    </div>
                )
            }
        </div>
    </nav>
  )
}

export default Navbar