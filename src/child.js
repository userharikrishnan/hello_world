// import React from 'react';

// function xyz(props) {
//        return ( 
//             <div>
//                 <p> Name : {props.name} </p>
//                 <p> Name : {props.name} </p>
//                 <p>Age : {props.age} </p>
//                 <p>Age : {props.age} </p>
//                 <p>{props.children}</p>
//                 <button onClick={props.k}> Increment count </button>
//            </div>
           
//        );
// }
// export default xyz;



import React, { useState } from 'react';

function Child(props) {
  const [data, setData] = useState(null);
  const handleClick = () => {
       const newData = " mashup stack";
        setData(newData);
        props.onDataFromChild(newData);
  }
   return (
       <div>
           <button onClick={handleClick}> click me </button>
           <p> Data in child component : {data}</p>
     </div>
  );
}

export default Child;


