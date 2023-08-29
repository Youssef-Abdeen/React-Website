import React from "react";
const Showcase = ({item}) => {
  return (
  <div className='showcase_component'>
      {item.map((choice) => {
      return (
      <>
      <h2 style={{background:'#B97375',align:'center',textAlign:'center',width:'90%' ,margin:'5%'}}>PRODUCT NAME</h2>
      <div style={{background:"Black",width:'90%',height:'300px',margin:'5%'}}>
      <img src={choice.img} />
      </div>
        <p style={{background:'#B97375',textAlign:'center',width:'90%' ,margin:'5%'}}>
        <b>PRICE : </b>
        <b>Colour : {choice.category} </b>
        </p>
        <div style={{display:'flex',flex:'row',alignContent:'center',justifyContent:'center'}}>
        <div>
        <button className="btn">Add To Wishlist</button>
        </div>
        <div>
        <button className="btn">Add To Cart</button>
        </div>
      </div>  
      </>  
      );
    })}
</div>)
};
export default Showcase;

