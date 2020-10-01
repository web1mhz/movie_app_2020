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
    name:"사과",
    image: "https://placeimg.com/200/200/nature",
  },
  {
    name:"수박",
    image: "https://placeimg.com/200/200/any",
  }
 
]


const movieIlike = [
  {
    name:"사과",
    image: "https://placeimg.com/200/200/nature",
  },
  {
    name:"수박",
    image: "https://placeimg.com/200/200/any",
  }
 
]

function App() {
  return (
    <div>     
      <h1> 과일 종류 </h1> 
      {
        foodIlike.map(dish=>(
          <Fruit name={dish.name} img={dish.image}/>
        ))
      } 


      {<Movie />}

      <Tgkim/>

     

    </div>

  );
}

export default App;
