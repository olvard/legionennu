import Scroll from './Scroll'

export default function Legenden() {
	return (
		<div className='w-full hidden md:flex justify-center items-center flex-col '>
			<h1 className='font-serif text-5xl font-bold text-orange-100 mb-4 '>LEGENDEN</h1>

			<img src='scroll.png' alt='legenden' className='w-full sm:w-9/12 mx-auto ' />

			<iframe className='w-8/12 h-96 sm:h-[579px] mt-8' src='https://www.youtube.com/embed/Fzp8Wku-_aU'></iframe>
		</div>
	)
}
