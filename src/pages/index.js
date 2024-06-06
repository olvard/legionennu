import Nav from '@/components/Nav'
import ParallaxComponent from '@/components/ParallaxComponent'
import HejNollan from '@/components/HejNollan'
import Divider from '@/components/Divider'
import Nolleboken from '@/components/Nolleboken'
import TextDivider from '@/components/TextDivider'
import Schema from '@/components/Schema'
import { Providers } from '@/components/Providers'
import Legenden from '@/components/Legenden'
import Spons from '@/components/Spons'

export default function Home() {
	return (
		<>
			<Nav />
			<Providers>
				<ParallaxComponent />
			</Providers>
			<div className='h-9000 flex flex-col items-center space-y-40'>
				<HejNollan />
				<Divider />
				<Nolleboken />
				<TextDivider />
				<Schema />
				<Legenden />
				<Spons />
			</div>
		</>
	)
}
