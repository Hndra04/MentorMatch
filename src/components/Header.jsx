import React from 'react'
import LoginButton from './LoginButton'
import RegisButton from './RegisButton'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/');
  };

  return (
    <header className='bg-white flex justify-between items-center'>
      <button className='flex gap-5 items-center py-5 px-5' onClick={() => {handleRedirect()}}>
        <img src="./assets/Icons/Logo_Blue.png" alt="" />
        <h1 className='font-bold blue text-2xl'>Lend-a-Hand</h1>
      </button>
      <div className='flex gap-5 pr-6'>
        <LoginButton />
        <RegisButton />
      </div>
    </header>
  )
}

export default Header