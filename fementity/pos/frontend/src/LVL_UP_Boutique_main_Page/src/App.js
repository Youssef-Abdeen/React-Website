import React, { useState } from "react";
import Data_size from "./Data_size";
import Buttons from "./Buttons";
import Showcase from "./Showcase";

const App = () => {
  const [item, set] = useState(Data_size);

  const options = [...new Set(Data_size.map((Val) => Val.category))];

  const filter = (curcat) => {
    const object_chosen = Data_size.filter((newVal) => {
      return newVal.category === curcat;
    });
    set(object_chosen);
  };
  return (
    <>
    <div className="App">
      <div style={{background:'#8F9DB7',width:'85%',height:'100px',justifyContent:'center',margin:'auto'}}> Header </div>
      <div className="container">
      <div className="SideBar20"> 
      <div className='Sidebar_component' style={{background: '#FDF8F1'}}>
        <h2>Size</h2>
        <div className='Size_Sidebar'>
             <Buttons
            filter={filter}
            set={set}
            options={options}
          />
        </div>
        <div className="Colour_Sidebar">
            <h2>Colour</h2>
            <button className="btn">RED</button>
            <button className="btn">BLACK</button>
            <button className="btn">ALL</button>
        </div>
    </div>
      </div>
      <div className="Showcases80">
        <div className="Showcasestop">
          <div className="showcase "><Showcase item={item} /></div>
          <div className="showcase "><Showcase item={item} /></div>
        </div>
      </div>
      </div>
      <div style={{background:'#8F9DB7',width:'85%',height:'100px',justifyContent:'center',margin:'auto'}}> Footer </div>
    </div>
  </>
  )
};
export default App;
