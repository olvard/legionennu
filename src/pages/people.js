import React from 'react'
import Link from 'next/link'
import Tilt from 'react-parallax-tilt'

export default function People() {
	return (
		<div className='w-10/12 flex flex-col justify-center mx-auto p-8'>
			<div className='flex gap-10'>
				<Link href='/' className='hidden md:block'>
					<img src='/back.svg' className='w-[50px]'></img>
				</Link>
				<h1 className='gradient-text font-serif text-5xl font-bold text-white mb-8'>LEGIONEN SOLARIS</h1>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
				{Array.from({ length: 11 }).map((_, index) => (
					<div key={index}>
						<Tilt className='image-container'>
							<img src={`/legion${index + 1}.png`} className='image ' draggable='false' />
						</Tilt>
					</div>
				))}
			</div>
		</div>
	)
}
