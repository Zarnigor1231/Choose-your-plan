import React, { useState } from 'react'

// Css
import './HomeBottom.css'

const HomeBottom = (() => {

    const [ btn , setBtn ] = useState([]);

    let obj = [
        {
            id:1,
            name:'Free',
            price:0,
            team:'Free forever',
            users:'Up to 2 users',
            githup:'Githup',
            // btn:'Git Started',
        },
        {
            id:2,
            name:'Lite',
            price:199,
            team:'Teams',
            users:'Up to 8 users',
            githup:'Githup',
            // btn:'Buy Now',
        },
        {
            id:3,
            name:'PRO',
            price:399,
            team:'Free forever',
            users:'Unlimited users',
            githup:'Githup',
            // btn:'Buy Now',
        },
        {
            id:4,
            name:'Enterprise',
            price:399,
            team:'Free forever',
            users:'Unlimited users',
            githup:'Githup',
            // btn:'Contact us',
        },
    ]

    function btnOnClick(id){
        if(btn.includes(id)){
            setBtn(btn.filter(item => item !== id))
            
        }
        else{
            setBtn([...btn , id] )
        }
    }
  return (
    <div>
        <ul className='choose-box'>
            {
                obj.map((item,id) => {
                    return(
                        <li className={`${ btn.includes(item.id) ? 'choose-item--active choose-item' : 'choose-item'}`} key={id}>
                            <h3 className='item-title'>{item.name}</h3>
                            <strong className='item-price'>${item.price}</strong>
                            <p className='item-text'>{item.team}</p>
                            <p className='item-text'>{item.users}</p>
                            <p className='item-text'>{item.githup}</p>
                            <button value={btn}  onClick={() => btnOnClick(item.id)} className={`${ btn.includes(item.id) ? 'item-btn--active item-btn' : 'item-btn'}`}>{`${ btn.includes(item.id) ? 'Buy Now' : 'Git Started'}`}</button>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
})

export default HomeBottom