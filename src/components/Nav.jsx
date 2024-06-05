import React from 'react'

const Nav = () => {
	return (
		<nav className='bg-secondary'>
			<div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-10'>
					<div className='flex-shrink-0 font-bold'>NOLLEP2024</div>
					<div className='hidden sm:block '>
						<div className='ml-6 flex items-center md:ml-0 '>
							{/* Your navigation items */}
							<a
								href='#nolleboken'
								className='text-white hover:bg-accent px-3 py-1 rounded-md text-m font-bold mx-6'
							>
								Nolleboken
							</a>
							<a
								href='#schema'
								className='text-white hover:bg-accent  px-3 py-1 rounded-md text-m font-bold mx-6'
							>
								Schema
							</a>
							<a
								href='#legenden'
								className='text-white hover:bg-accent  px-3 py-1 rounded-md text-m font-bold mx-6'
							>
								Legenden
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Nav
