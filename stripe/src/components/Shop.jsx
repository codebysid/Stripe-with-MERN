import React,{useState} from "react";

const Shop = () => {
    const [quantity,setQuantity]=useState(1)

    const checkout=async()=>{
        const data = await fetch('http://localhost:3000/checkout',{
            method:'POST',
            headers:{
                'Content-type': 'application/json',
            },
            body:JSON.stringify({
                "id":1,
                "quantity":quantity
            })
        })

        const res=await data.json()
        res?window.location=res.url:null
    }

  return (
    <div>
      <div className="mainDiv">
        <div className="imageDiv">
          <img
            src="https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=683&q=80"
            alt="Airpods Image"
          />
        </div>
        <div className="detailsAndButtonDiv">
          <div className="detailsDiv">
            <span>Apple Airpods PRO</span><br />
            <span>Price :20545 INR</span>
          </div>

        <div className="quantityDiv">
            <button onClick={()=>setQuantity(prev=>prev>1?prev-1:1)}>-</button>
            <span>{quantity}</span>
            <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
        </div>

          <div className="buyButtonDiv">
            <button
            onClick={checkout}
            >
                Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
