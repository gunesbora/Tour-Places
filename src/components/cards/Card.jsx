import React from 'react'
import  Data from '../../helper/data'
import "./Card.css";


let NewCard = () => {
  return (
    
      
    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 mx-4">
        {Data.map((props) => (
          <div className='col' key={props.id}>
          <div className='myCard bg-dark' >
              <div className='container'>
                  <h2 className="">{props.title}</h2>
                  <img className='image' src={props.image} alt="" />
                  <div className='overlay'>
                      <div className='text'>{props.desc}</div>
                  </div>
              </div>
          </div>
      </div>
        ))}
      </div>
    
  );
};

export default function Card() {
  return (
    <div>
      <NewCard />
    </div>
  );
}





