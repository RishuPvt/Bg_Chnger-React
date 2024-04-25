import './App.css'
import Header from './Header'
import { useState } from 'react'
function App() {
const [color,setColor]=useState("black")

  return (
    <>

    <div className='Nav flex'>
  <h2 className='Heading p-2.5'>BG-CHANGER</h2>
<ul className='items flex list-none gap-5 items-center justify-center'>
    <li className='list'><button onClick={()=>setColor("red")}>RED</button></li>
    <li className='list'><button onClick={()=>setColor("blue")}>BLUE</button></li>
    <li className='list'><button onClick={()=>setColor("olive")}>YELLOW</button></li>
    <li className='list'><button onClick={()=>setColor("orange")}>ORANGE</button></li>
    <li className='list'><button onClick={()=>setColor("grey")}>GREY</button></li>
</ul>
</div>
<Header background2={color}/>
<div className='w-full ' style={{background:color}}> </div>

    </>
  )
}

export default App
