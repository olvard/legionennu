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
import { Toaster } from '@/components/ui/toaster'

export default function Home() {
	return (
		<>
			<Nav />
			<Providers>
				<ParallaxComponent />
			</Providers>

			<div className='max-w-[1440px] flex flex-col items-center space-y-40 mx-auto '>
				<HejNollan />
				<Divider />
				<Nolleboken />
				<TextDivider />
				<Schema />
				<Toaster />
				<Legenden />
				<Spons />
			</div>
		</>
	)
}
