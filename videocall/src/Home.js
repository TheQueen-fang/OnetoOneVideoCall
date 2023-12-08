import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const handleJoin = () => {
    navigate(`/room/${roomID}`)
     
   } 
    
  
  const [roomID, setRoomId] = useState();
  return (
    <div>
      <input placeholder='Enter Room Id ' type='text' value={roomID} onChange={(e) => {
        setRoomId(e.target.value)
      }}/>
      <button onClick={handleJoin } className='btn'>Join</button>
    </div>
  )
}

export default Home;
