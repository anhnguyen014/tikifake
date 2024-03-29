import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperTypeProduct } from './style'
import SlideComponent from '../../components/SlideComponent/SlideComponent'
import slider1 from "../../assets/images/slider1.webp"
import slider2 from "../../assets/images/slider2.webp"
import slider3 from "../../assets/images/slider3.webp"

const HomePage = () => {
  const arr =["TV", "Laptop", "Tủ lạnh"]
  return (
    <>
      <div style={{padding : '0 120px'}}> 
        {/* typeproduct */}
        <WrapperTypeProduct>
        {
          arr.map((item)=>{
            return(

              <TypeProduct name={item} key ={item}  />
            )
          })
        }
        </WrapperTypeProduct> 
      </div>
       {/* SlideComponent */}
       <div id='container' style={{backgroundColor:"#efefef", padding :"0 120px"}}>
            <SlideComponent arrImages= {[slider1,slider2,slider3]} />
        </div>
    </>
  )
}

export default HomePage
