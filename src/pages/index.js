import Nav from '@/components/Nav'
import ParallaxComponent from '@/components/ParallaxComponent'
import HejNollan from '@/components/HejNollan'
import { Providers } from './providers'

export default function Home() {
	return (
		<>
			<Nav />
			<Providers>
				<ParallaxComponent />
			</Providers>
			<div className='h-screen flex flex-col items-center '>
				<HejNollan />
			</div>
		</>
	)
}
