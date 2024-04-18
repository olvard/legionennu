import React from 'react'

const Nav = () => {
	return (
		<nav className='bg-secondary'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-10'>
					<div className='flex-shrink-0 font-bold '>NOLLEP2024</div>
					<div className='hidden md:block'>
						<div className='ml-4 flex items-center md:ml-6'>
							{/* Your navigation items */}
							<a
								href='#'
								className='text-gray-300 hover:bg-accent hover:text-white px-2 py-1 rounded-md text-sm font-bold '
							>
								Nolleboken
							</a>
							<a
								href='#'
								className='text-gray-300 hover:bg-accent hover:text-white px-2 py-1 rounded-md text-sm font-bold'
							>
								Schema
							</a>
							<a
								href='#'
								className='text-gray-300 hover:bg-accent hover:text-white px-2 py-1 rounded-md text-sm font-bold'
							>
								Legenden
							</a>
							<a
								href='#'
								className='text-gray-300 hover:bg-accent hover:text-white px-2 py-1 rounded-md text-sm font-bold'
							>
								Spela
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Nav
