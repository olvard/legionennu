import { ParallaxBanner } from 'react-scroll-parallax'

const Component = () => {
	return (
		<ParallaxBanner
			layers={[
				{ image: 'p1.png', speed: -30 },
				{ image: 'p2.png', speed: -20 },
				{ image: 'p3.png', speed: -5 },
			]}
			className='aspect-[1.5/1]'
		/>
	)
}

export default Component
