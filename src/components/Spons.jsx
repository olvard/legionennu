import { useEffect, useState } from 'react';
import { Card } from './ui/card';

export default function Spons() {
  const [showSkylt, setShowSkylt] = useState(false);

  useEffect(() => {
    // Generate a random number between 0 and 1
    const randomNumber = Math.random();
    // Set showSkylt to true if the random number is greater than 0.5
    if (randomNumber > 0.5) {
      setShowSkylt(true);
    }
  }, []);

  return (
    <div className='w-11/12 pb-8'>
      <Card className='h-56 border-0 shadow-none bg-orange-100 flex items-center gap-20'>
        <img src='strommen.svg' alt='Strömmen' className='w-1/4 h-1/3 md:h-2/3 mx-0' />
        <img src='korps.png' alt='korps' className='w-1/4' />
        {showSkylt && (
          <img src='skylt.png' alt='skylt' className='w-1/4 mr-8' />
        )}
      </Card>
    </div>
  );
}

