// import "./App.css"
// import image from "./images/oppenheimer.jpeg"
// import React, { useState, useEffect } from 'react';



// function App() {
//     let a = 'World'
//     let b = {'color':'blue'}
//     console.log(a)
//   return (
//     <div>

//       <h1 style={{color:"red"}}>Hello {a}</h1>
//       <h1 style={b}>Hello {a}</h1>
//       <h1 className="h1class">Hello {a}</h1>
//       <h2 className="h2class">Hello {a}</h2>
       

//       <div className='container'>
//         <div className='row'>
//           <div className='col-md-4 bg-primary '> column 1</div>
//           <div className='col-md-4 bg-warning' > column 2</div>
//         </div>
//       </div>

//       <center>
//       <img src="https://m.media-amazon.com/images/M/MV5BYjFjZGRjMWYtZTA5MS00OTZkLWI1MjctNDQ2NmQzMWM1NzRhXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_.jpg" width={'100px'}/>
//       <div><img src={image}/></div>
//       </center>


//     </div>

//   );
// }

// export default App;



// function App(){
//   const id = 1;
//   const mark = 92.5;
//   const x = false;
//   const course = [ "python", "java", "php", "javascript" ];
//   if(x){
//     var a = 'this is an if else statement if the condition is true'
//   }else{
//     var a = 'this is an if else statement if the condition is false'
//   }
//       return (
//         <div>
//         <p>ID is : {id} </p>
//         <p> mark is : {mark}</p>
//         <p>{x.toString()}</p>
//         <p>{a}</p>
//         {course.map((item)=>{return <p>{item}</p>})}
        
//         </div>
//       )
// }
// export default App;



// function App() {
//      const fruits = [<img src={image}/>, <img src={image}/>, <img src={image}/>, <img src={image}/>];
//      const fruitList = [ ];
//   for( let i=0; i < 4 ; i++) {
//        fruitList.push( fruits[i] );
//  }
// return (
//          <div>
//             <h1>Fruit list</h1>
//             <ul>{fruitList}</ul>
//       </div>
//   );
// }
// export default App;




// function App() {
//   let students = [{name:"Vijay",location:"Kochi"},{name:"Rajesh", location:"Delhi"}];
 
//   return (
//     <div>
//       <img src={image}/>
//       {students.map((item) => (
//         <table border={'3'}>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Location</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>{item.name}</td>
//               <td>{item.location}</td>
//             </tr>
//           </tbody>
//         </table>
//       ))}
//     </div>
//   );
// }

// export default App;




// function App(){
//   var user = 'John';
//   var x = ["John" , "William", "David"];
//   var y = { name : "Arun" , age : 20 }
//       return (
//     <div>
//       <input type='text' placeholder={user} /><br/>
//       <input type='text' placeholder={x[2]} /><br/>
//       <input  type='text' placeholder={y.name} /><br/>

//         {/* events  */}

//         <button onClick={()=>{console.log("button click event")}}>Click</button>
//         <button onMouseOver={()=>{console.log("button hover event")}}>hover</button>
//         <button onDoubleClick={()=>{console.log("button double click event")}}>double Click Me</button>

//     </div>
// )}
// export default App;


// function handleClick() {
//   console.log('Button was clicked!');
// }

// function App() {
//   return (
//     <button onClick={handleClick}>
//       Click me
//     </button>
//   );
// }
// export default App;




// function App() {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={handleClick}>Increment</button>
//     </div>
//   );
// }

// export default App;




// function App() {
//   const [name, setName] = useState('');

//   function handleNameChange(event) {
//     setName(event.target.value);
//   }

//   return (
//     <div>
//       <label>Name:</label>
//       <input type="text" value={name} onChange={handleNameChange} />
//       <p>Hello, {name}!</p>
//     </div>
//   );
// }

// export default App;





// function App() {
//   const [name, setName] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Hello, ${name}!`);
//   };

//   return (
//     <div className="App">
//       <h1>Simple React Form</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name:</label>
//         <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required/>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;





// import Child from "./child";

// function App() {
//   const name = "Alice";
//   const age = 25;
//   return ( 
//     <Child name={name} age={age} >
//        <p> Welcome to mashup stack </p>
//    </Child>
//    );
// }

// export default App;




// import Child from './child';

// function App() {
//    const [count, setCount] = useState(0);
//    function incrementCount(){
//   setCount(count + 1);
//     }
//    return (
//        <div>
//             <h1>Count: { count } </h1>
//             <Child k={incrementCount} />
//       </div>
//   );
// }
  
// export default App;




// import Child from './child';

// function App() {
//   const [ dataFromChild, setDataFromChild] = useState(null);
  
//   const handleDataFromChild = (data) => {
//     setDataFromChild(data);
// }

//   return(
//       <div>
//             <Child onDataFromChild = {handleDataFromChild} />
//             <p> Data from child component : {dataFromChild} </p>
//     </div>
//     );
// }

// export default App;




// function App(){
//   const [count, setCount] = useState(0);
//   useEffect( () =>{
//     console.log("component has rendered");
//   }, [ ]);
  
//   const handleClick = () => {
//     setCount(count + 1);
//   };

//     return (
//   <div>
//   <p>Count : {count}</p>
//   <button onClick={handleClick} > Increment count </button>
//   </div>
// );
// }
// export default App;



// function App(){
//   const [count, setCount] = useState(0);
//   useEffect( () =>{
//     console.log("component has rendered");
//   });
  
//   const handleClick = () => {
//     setCount(count + 1);
//   };

//     return (
//   <div>
//   <p>Count : {count}</p>
//   <button onClick={handleClick} > Increment count </button>
//   </div>
// );
// }
// export default App;




// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log(`Count changed to ${count}`);
//   }, [count]);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment Count</button>
//     </div>
//   );
// }
// export default App;


import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return(
  <div>
    <Navbar/>
    <p>Home component </p>
  </div>
);
}

export default App;









