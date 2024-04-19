import Nav from '@/components/Nav'
import ParallaxComponent from '@/components/ParallaxComponent'
import { Providers } from './providers'

export default function Home() {
	return (
		<>
			<Providers>
				<Nav />
				<ParallaxComponent />
			</Providers>
			<div className='h-screen'></div>
		</>
	)
}
