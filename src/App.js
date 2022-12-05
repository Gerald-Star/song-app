
import Expenses from './components/Expenses';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450.00,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;





























//   const bird1 = new Audio( 
//     "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3" 
//   ); 
 
//   const bird2 = new Audio( 
//     "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3" 
//   ); 

//   const bird3 = new Audio (

//   );
 
//   function toggle1() { 
//     if (bird1.paused) { 
//       bird1.play(); 
//     } else { 
//       bird1.pause(); 
//     } 
//   }; 

//   function toggle2() { 
//     if (bird2.paused) { 
//       bird2.play(); 
//     } else { 
//       bird2.pause(); 
//     } 
//   }; 

//   function toggle3(){
//     if(bird3.paused){
//       bird3.play();
//     }else {
//       bird3.pause()
//     }
//   }


//   return (
//     <div className="App">
//        <div> 
//       <button onClick={toggle1}>Caspian Tern 1</button> 
//       <button onClick={toggle2}>Caspian Tern 2</button> 
//       <button onClick={toggle3}>Caspian Tern 3</button>
//     </div>
      
//     </div>
//   );
// }

// export default App;
