import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}>

    <div className='fixed flex flex-wrap
    justify-center bottom-12 inset-x-0 px-2'>test</div>

    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
      <button onClick={()=>setColor("red")} className='outline-none bg-red-700
      px-4 py-1 rounded-full shadow-lg'
      >Red</button>
       <button onClick={()=>setColor("green")} className='outline-none bg-green-500
      px-4 py-1 rounded-full shadow-lg'
      >Green</button>
       <button onClick={()=>setColor("blue")} className='outline-none bg-blue-600
      px-4 py-1 rounded-full shadow-lg'
      >Blue</button>
       <button onClick={()=>setColor("black")} className='outline-none bg-black
      px-4 py-1 rounded-full shadow-lg text-white'
      >Black</button>
    
      
    </div>
    </div>
  )
}

export default App
