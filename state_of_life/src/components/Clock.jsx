import { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  }, [])
  
  return (
    <div>
      <h3>{time.toLocaleTimeString()}</h3>
    </div>
  );
};

export default Clock;