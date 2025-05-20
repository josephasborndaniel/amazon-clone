import React from 'react'
import './App.css'
import loogo from './loogo.jpg'
import SearchIcon from '@mui/icons-material/Search'
import { ShoppingBasket } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useStateValue } from './components/StateProvider'
import { auth } from './firebase';

function Header() {
  const [{ basket,user }, dispatch] = useStateValue();

  const handelAuthentication=()=>{
    if(user){
      auth.signOut();
    }
  }
  return (
    <div className='h-[60px] flex items-center bg-black sticky top-0 z-[100]'>
      <Link to="/">
       <div className='w-[100px] object-contain mx-[20px] mt-[18px] top-0 z-[100]'>
             <img src={loogo} alt="logo" />
       </div>
      </Link>
      
       <div className="flex items-center w-full border-r-[24px] ">
        <input type="text" className='bg-white p-[10px] w-full  h-[24px] flex-1' /> 
            <SearchIcon className="p-[5px] h-[26px] bg-[#cd9042]" />
       </div>
       <div className=" flex justify-evenly">
        <Link to ={!user && 'login'}>
        <div className=" flex flex-col mx-[10px] text-white " onClick={handelAuthentication}>
          <span className='text-[10px] '>Hellow_Guest</span>
          <span className='header_optionLineTwo' >{user? 'sign out':'sign In'}</span>
        </div>
        </Link>
        <div className="flex flex-col mx-[10px] text-white">
           <span className='text-[10px]'>Returns</span>
          <span className='header_optionLineTwo'>Orders</span>
        </div>
        <div className="flex flex-col mx-[10px] text-white">
           <span className='text-[10px] '>Your</span>
          <span className='header_optionLineTwo '>Prime</span>
        </div>
       </div>

      <Link to="Checkout">
      <div className="flex m-3">
        <ShoppingBasket className='flex  items-center text-white'/>
        <span className='text-white  items-center text-[10px] m-[5px]'>{basket.length}</span>
       </div>
      </Link>
       
      </div>
  )
}

export default Header
