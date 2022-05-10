import React, { useState } from 'react'
import ClassComponent from './ClassComponent'
import Functional from './Functional'
import "./style.css"
const Preview = () => {
  const [click1,SetName1] = useState(false)
  const [click2,SetName2] = useState(false)
  return (
    <>
        <h1>Styling using Functional and Class Component</h1>
 
       <div id='btn'>
         <button  className='btn1' onClick={()=>{click1?SetName1(false):SetName1(true)}} > To see styling in functional component</button>
         <button  className='btn2' onClick={()=>{click2?SetName2(false):SetName2(true)}} >to see styling in ClassComponent</button> 
           
         

       </div>
       <div className='component'>
               { 
               click1 && <Functional />
               
               }
                {
                click2 && <ClassComponent />
                }
            </div>
       
    </>
   

  )
}

export default Preview