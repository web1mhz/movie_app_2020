import React from 'react';

function Fruit (prop) {
  
  return (
   <div >
      
      <h1> {prop.name}이다. </h1> 
      <img src = {prop.img} alt={prop.name}></img> 
       </div>   ); 
  
};



const foodIlike = [
  {
    id: 1,
    name:"사과",
    image: "https://placeimg.com/200/200/nature",
  },
  {
    id: 2,
    name:"수박",
    image: "https://placeimg.com/200/200/any",
  },
  {
    id: 3,
    name:"포도",
    image: "",
  }
 
];





function App() {
  return (
    <div>     
      <h1> 과일 종류 </h1> 
      {foodIlike.map(dish =>(
        <Fruit key={dish.id} name = {dish.name} img={dish.image}/>
      ))}  
    </div>
  );
}

export default App;
