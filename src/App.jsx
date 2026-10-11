import './App.css';

import { useState } from 'react';

const App = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  const calBmi = (e) => {
    e.preventDefault();

    if (Number(weight) <= 0 || Number(height) <= 0) {
      alert('Please enter a valid weight and height');
      return;
    }

    // Height ko centimeters se meters mein convert karna
    const heightInMeters = Number(height) / 100;

    // BMI calculate karna
    const calculatedBmi = Number(weight) / (heightInMeters * heightInMeters);

    setBmi(calculatedBmi.toFixed(1));

    // BMI ke according message show karna
    if (calculatedBmi < 18.5) {
      setMessage('You are underweight');
    } else if (calculatedBmi < 25) {
      setMessage('You are a healthy weight');
    } else if (calculatedBmi < 30) {
      setMessage('You are overweight');
    } else {
      setMessage('You are in the obesity range');
    }
  };

  const reload = () => {
    setWeight('');
    setHeight('');
    setBmi('');
    setMessage('');
  };

  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>

        <form onSubmit={calBmi}>
          <div>
            <label>Weight (kg)</label>
            <input
              type="number"
              placeholder="Enter weight in kg"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div>
            <label>Height (cm)</label>
            <input
              type="number"
              placeholder="Enter height in cm"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div>
            <button className="btn" type="submit">
              Submit
            </button>

            <button className="btn btn-outline" onClick={reload} type="button">
              Reload
            </button>
          </div>

          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;

// import { useState } from 'react';

// const App = () => {
//   //makingstste of our application
//   const [weight, setWeight] = useState(0);
//   const [height, setHeight] = useState(0);
//   const [bmi, CalculatedsetBmi] = useState('');
//   const [message, setMessage] = useState('');

//   // LOGIC...
//   let calBmi = (e) => {
//     e.preventDefault();
//     if (Number(weight) === 0 || Number(height) === 0) {
//       alert('please enter a valid weight and height');
//       return;
//     }

//     // Height to centimeters se meters mein convert karna...
//     const heightInMeters = Number(height) / 100;
//     // BMI calculator karna
//     const bmi = (weight / (heightInMeters * heightInMeters)) * 703;
//     CalculatedsetBmi(bmi.toFixed(1));

//     //BMI ka according message show karna...

//     if (bmi < 18.5) {
//       setMessage('You are underweight');
//     } else if (bmi < 25) {
//       setMessage('You are a healthy weight');
//     } else if (bmi < 30) {
//       setMessage('You are overweight');
//     } else {
//       setMessage('You are in the obesity range');
//     }
//   };

//   // Reload
//   const reload = () => {
//     window.location.reload();
//   };

//   return (
//     <div className="App">
//       <div className="container">
//         <h2>BMI Calculator</h2>
//         <form onSubmit={calBmi}>
//           <div>
//             <label>Weight (ibs)</label>
//             <input
//               type="text"
//               placeholder="Enter Weight value"
//               value={weight}
//               onChange={(e) => setWeight(e.target.value)}
//             />
//           </div>
//           <div>
//             <label>Height (in)</label>
//             <input
//               type="text"
//               placeholder="Enter Height value"
//               value={height}
//               onChange={(e) => setHeight(e.target.value)}
//             />
//           </div>
//           <div>
//             <button className="btn" type="submit">
//               Submit
//             </button>
//             <button className="btn btn-outline" onClick={reload} type="button">
//               Reload
//             </button>
//           </div>
//           <div className="center">
//             <h3>Your BMI is:{bmi}</h3>
//             <p>{message}</p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default App;
