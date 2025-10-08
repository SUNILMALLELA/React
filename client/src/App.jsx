
import React from 'react'
import Hero from './components/Hero'
import Cond1 from './components/Cond1';
import Cond2 from './components/Cond2';


const fruits = ["apple", "banana", "carrot"]

const data = [
  { id: "1", name: "sunil", age: "23", city: "Bang" },
  { id: "2", name: "teja", age: "24", city: "Hyder" },
  { id: "3", name: "shive", age: "25", city: "AP" },
  { id: "4", name: "laddu", age: "26", city: "chennai" }
]

function App() {
  // const display = true;
  // if (display) {
  //   return <Cond1 />
  // }
  // else {
  //   return <Cond2 />
  // }
  // let message;
  // const display = true;
  // if (display) {
  //   message = <Cond1 />
  // }
  // else {
  //   message = <Cond2 />
  // }
  // return message;
  return (
    <>

      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <div>
        {data.map((datas, index) => (
          <Hero
            key={index}
            ids={datas.id}
            names={datas.name}
            ages={datas.age}
            citys={datas.city}
          />
        ))}
      </div>
    </>
  )
}

export default App
