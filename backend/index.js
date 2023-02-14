require('dotenv').config() 
const express=require('express')
const cors=require('cors')
const stripe =require('stripe')(process.env.STRIPE_KEY)
const app=express()
app.use(cors())
app.use(express.json())


const store=new Map()
store.set(1,{name:'Apple AirPods PRO',price:2054500})

app.post('/checkout',async(req,res)=>{
    const items=[req.body]
    try{
        const session=await stripe.checkout.sessions.create({
            payment_method_types:['card'],
            mode:'payment',
            line_items:items.map(ele=>{
                const productDetailFromServer=store.get(ele.id)
                return {
                    price_data:{
                        currency:'inr',
                        product_data:{
                            name:productDetailFromServer.name
                        },
                        unit_amount:productDetailFromServer.price
                    },
                    quantity:ele.quantity
                }
            }),
            success_url:'http://localhost:5173/success',
            cancel_url:'http://localhost:5173/cancel'
        })
        res.json({url:session.url})
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }

    })


app.listen(3000,()=>console.log("listening"))

