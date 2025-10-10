
// import React from 'react'
// import Hero from './components/Hero'
// import Cond1 from './components/Cond1';
// import Cond2 from './components/Cond2';
// import Click from './components/Click';
// import Form from './components/Form';
// import InlineComponent from './Projects/InlineComponent';
// import ToDoApp from './Projects/ToDoApp';


// const fruits = ["apple", "banana", "carrot"]

// const data = [
//   { id: "1", name: "sunil", age: "23", city: "Bang" },
//   { id: "2", name: "teja", age: "24", city: "Hyder" },
//   { id: "3", name: "shive", age: "25", city: "AP" },
//   { id: "4", name: "laddu", age: "26", city: "chennai" }
// ]

// function App() {
//   // const display = true;
//   // if (display) {
//   //   return <Cond1 />
//   // }
//   // else {
//   //   return <Cond2 />
//   // }
//   // let message;
//   // const display = true;
//   // if (display) {
//   //   message = <Cond1 />
//   // }
//   // else {
//   //   message = <Cond2 />
//   // }
//   // return message;
//   //const display = true;
//   return (
//     <>
//       {display ? <Cond1></Cond1> : <Cond2></Cond2>}

//       <ul>
//         {fruits.map((fruit, index) => (
//           <li key={index}>{fruit}</li>
//         ))}
//       </ul>
//       <div>
//         {data.map((datas, index) => (
//           <Hero
//             key={index}
//             ids={datas.id}
//             names={datas.name}
//             ages={datas.age}
//             citys={datas.city}
//           />
//         ))}
//         <Click />
//         <Form />
//         <ToDoApp />
//         <InlineComponent />
//       </div>
//     </>
//   )
// }

// export default App










import React from 'react'
//import ToDoApp from './Projects/ToDoApp'
import InlineComponent from './Projects/InlineComponent'
import OutLineComponent from './Projects/OutLineComponent'

function App() {
  return (
    <>
      {/* <ToDoApp /> */}
      <InlineComponent />
      <OutLineComponent />
    </>
  )
}

export default App