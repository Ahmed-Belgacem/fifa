import React from 'react'
import Players from './Players'


function Playerlist({players}) {
  return (
    <div className='parent'>
        {players.map((el)=><Players el={el}/>)}
    </div>
  )
}

export default Playerlist
