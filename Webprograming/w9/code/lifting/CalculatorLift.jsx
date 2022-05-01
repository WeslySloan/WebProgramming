import {useState} from 'react';

const scaleNames = {c: 'Celsius', f: 'Fahrenheit'};

const CalculatorLift = () => {
  const[temp, setTemperature] = useState({temperature: '', scale: 'c'})
  const handleCelsiusChange = (temperature) => setTemperature({scale: 'c', temperature})
  const handleFahrenheitChange = (temperature) => setTemperature({scale: 'f', temperature})

  // -------------------------------------
  const toCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;
  const toFahrenheit = (celsius) => (celsius * 9 / 5) + 32;
  const tryConvert = (temperature, convert) => {
    const input = parseFloat(temperature);
    // if (Number.isNaN(input)) {
    //   return '';
    // }
    // const output = convert(input);
    // const rounded = Math.round(output * 1000) / 1000;
    // return rounded.toString();

    return (
      Number.isNaN(input)
      ? ''
      : (function () {
          const output = convert(input);
          const rounded = Math.round(output * 1000) / 1000;
          return rounded.toString();}
        ) ()   // 정의된 무명 함수를 즉시 호출하여 returen된 결과 값
    )
  }
  
  // ----------------------------------------
  const scale = temp.scale;
  const temperature = temp.temperature;
  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

  // ----------------------------------------
  
  return (
    <div>
      <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={handleCelsiusChange} />
      <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  )
};

const TemperatureInput = ({ scale, temperature, onTemperatureChange }) =>
  <fieldset>
    <legend>Enter temperature in {scaleNames[scale]}:</legend>
    <input value={temperature}  onChange={(e)=>onTemperatureChange(e.target.value)} />
  </fieldset>

const BoilingVerdict = ({ celsius }) => 
  (celsius >= 100) 
  ?  <p>The water would boil.</p> 
  :  <p>The water would not boil.</p>


export default CalculatorLift;

// 컴포넌트 호출 시 pass 되는 handler의 이름을 마치 이벤트처럼 onTemp ... 형태로 이름 붙임

// set 함수는 handle 함수 내에 감싸져 있고, 이 handle 함수를 컴포넌트의 파라메터로 전송함
// 결과적으로 set 함수가 여러 컴포넌트 사이에서 공유되고 있음.
