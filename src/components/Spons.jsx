import { useEffect, useState } from 'react'
import { Card } from './ui/card'

export default function Spons() {
	// const [showSkylt, setShowSkylt] = useState(false)

	// useEffect(() => {
	// 	// Generate a random number between 0 and 1
	// 	const randomNumber = Math.random()
	// 	// Set showSkylt to true if the random number is greater than 0.5
	// 	if (randomNumber > 0.5) {
	// 		setShowSkylt(true)
	// 	}
	// }, [])

	return (
		<div className='w-11/12 pb-8'>
			<Card className='sm:h-56 h-full border-0 shadow-none bg-orange-100 flex sm:flex-row flex-col items-center gap-10 sm:gap-20 p-8'>
				<img src='strommen.svg' alt='Strömmen' className='w-2/4 h-1/3 h-full mx-0' />
				<img src='korps.png' alt='korps' className='sm:w-1/4 w-2/3 ' />
			</Card>
      <br></br>
      Vi köper våra märken från mera.se
      <a href='https://www.mera.se' target='_blank' rel='noreferrer'>
        <img src='mera.png' alt='mera' className='w-2/12 h-auto  pt-2 ' />
      </a>
		</div>
	)
}
