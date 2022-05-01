import {useState} from 'react';

// const Calculator = () => {
//   const[temperature, setTemperature] = useState({temperature: ''})
//   const handleChange = (e) => setTemperature({temperature: e.target.value}) 
//   return (
//     <fieldset>
//       <legend>Enter temperature in Celsius:</legend>
//       <input value={temperature.temperature} onChange={handleChange} />
//       <BoilingVerdict  celsius={parseFloat(temperature.temperature)} />
//     </fieldset>
//   )
// };
// set 변수의 타입이 object인 경우

// set 변수의 타입이 string인 경우 

const Calculator = () => {
  const[temperature, setTemperature] = useState('')
  const handleChange = (e) => setTemperature(e.target.value) 
  return (
    <fieldset>
      <legend>Enter temperature in Celsius:</legend>
      <input value={temperature} onChange={handleChange} />
      <BoilingVerdict celsius={parseFloat(temperature)} />
    </fieldset>
  )
};

const BoilingVerdict = ({ celsius }) => 
  (celsius >= 100) 
  ?  <p>The water would boil.</p> 
  :  <p>The water would not boil.</p>

export default Calculator;