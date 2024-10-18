import React from 'react'
import { useNavigate } from 'react-router-dom';

const DetailsButton = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('');
  };

  return (
    <button
      className='absolute bottom-2 right-2 bg-orange-500 text-white py-1.5 px-5 m-0.5'
      style={{backgroundColor: '#EE6C4D', borderRadius: '12px'}}
      onClick={() => {handleRedirect()}}
    >
      Details
    </button>
  )
}

export default DetailsButton