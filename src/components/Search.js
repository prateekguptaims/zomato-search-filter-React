import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import "./style.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Fooddata from './FoodData'
import Set from './Set';
const Search = () => {
    const [fdata, setFdata] = useState(Fooddata);

    const [copydata, setCopyData] = useState([])
    //console.log(fdata)
    useEffect(() => {
        setTimeout(()=>{
            setCopyData(Fooddata)
        },2000)
    
    }, [])
    const changeData=(e)=>{
        let getchangedata=e.toLowerCase();
        if(getchangedata==""){
            setCopyData(fdata)
        }
        else{
            let storedata= copydata.filter((ele,k)=>{
             return   ele.rname.toLowerCase().match(getchangedata);
            })
             setCopyData(storedata);
        }

        console.log(getchangedata)
    }
    
    console.log(copydata)
    const zomatologo="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
    
  return (
    
    <>
    <div className='container d-flex justify-content-between align-item-center mt-2'>
    <img src={zomatologo} style={{maxwidth:"9rem",height:"2.7rem",position:"relative",cursor:"pointer",left:"2%"}} alt=''/>
    <h2 style={{color:"#1b1464",cursor:"pointer"}} className='mt-2'>Search Filter</h2>

    </div>
    <Form className='d-flex justify-content-center align-ietm-center mt-3'>
      <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">
        
        <Form.Control type="text" placeholder="Search Restaurant" onChange={(e)=>changeData(e.target.value)} />
       
      </Form.Group>
      <button className='btn text-light col-lg-1' style={{background:"#ed4c67"}}>Search </button>
      </Form>
    <section className='item_section mt-4 container'>
        <h2 className='px-4' style={{fontWeight:"400"}}>Restaurant In Delhi</h2>
        <div className='row mt-2 justify-content-center align-ietm-center'>
          {copydata && copydata.length ? <Cards data={copydata} /> :<Set sdata={fdata}/>}  
        </div>
    </section>
    
    
    </>
  )
}

export default Search