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
import { Toaster } from '@/components/ui/sonner'
import LegendenMobile from '@/components/LegendenMobile'

export default function Home() {
	return (
		<>
			<Nav />
			<Providers>
				<ParallaxComponent />
			</Providers>
			<img src='logo_noyear.svg' alt='logo' className='p-8 w-9/12 mx-auto sm:hidden' />
			<div className='max-w-[1440px] flex flex-col items-center space-y-40 mx-auto '>
				<HejNollan />
				<Divider />
				<Schema />
				<Toaster richColors />
				<Nolleboken />
				<TextDivider />
				<Legenden />
				<LegendenMobile />
				<Spons />
			</div>
		</>
	)
}
