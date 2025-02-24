import { useRef, useState } from 'react';

export default function UseRef() {
  // Contador de clics
  const clickCountRef = useRef(0);

  function handleClick() {
    clickCountRef.current += 1;
    alert('Hiciste clic ' + clickCountRef.current + ' veces');
  }

  // Cronómetro
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    // Inicia el cronómetro
    const start = Date.now();
    setStartTime(start);
    setNow(start);

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  let secondsPassed = 0;
  if (startTime !== null && now !== null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <button onClick={handleClick}>Haz clic!</button>
      <h2>Crear un cronómetro</h2>
      <h2>Tiempo transcurrido: {secondsPassed.toFixed(3)} segundos</h2>
      <button onClick={handleStart}>Iniciar</button>
      <button onClick={handleStop}>Detener</button>
    </>
  );
}
