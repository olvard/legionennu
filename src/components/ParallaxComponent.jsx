import { ParallaxBanner, ParallaxBannerLayer, BannerLayer } from 'react-scroll-parallax'

// const Component = () => {
// 	return (
// 		<ParallaxBanner
// 			layers={[
// 				// { image: 'p0.png', speed: -40 },
// 				{ image: 'p1.png', speed: -20 },
// 				{ image: 'p2.png', speed: -10 },
// 				{ image: 'logo.svg', speed: -10 },
// 				{ image: 'p3.png', speed: -5 },
// 				// { image: 'p4.png', speed: -5 },
// 				// { image: 'p5.png', speed: -1 },
// 			]}
// 			className='aspect-[3.3/1]'
// 		></ParallaxBanner>
// 	)
// }

// import parallax3 from 'public/parallax3.png'
// import logo_s from 'public/logo_s.svg'
// import parallax4 from 'public/parallax4.png'
// import parallax5 from 'public/parallax5.png'

const Component = () => {
	// const float = {
	// 	image: 'rec.png',
	// 	translateY: [0, 0.1],
	// 	opacity: [1, 1],
	// 	scale: [1, 1, 'easeOutCubic'],
	// 	shouldAlwaysCompleteAnimation: true,
	// }

	const background = {
		image: 'p1.png',
		translateY: [0, 30],
		opacity: [1, 60],
		scale: [1, 1, 'easeOutCubic'],
		shouldAlwaysCompleteAnimation: true,
	}

	const layer1 = {
		image: 'p3.png',
		translateY: [0, 25],
		opacity: [1, 20],
		scale: [1, 1, 'easeOutCubic'],
		shouldAlwaysCompleteAnimation: true,
	}

	const foreground = {
		image: 'p4.png',
		translateY: [0, 20],
		scale: [1, 1, 'easeOutCubic'],
		shouldAlwaysCompleteAnimation: true,
	}
	const logo = {
		translateY: [0, 10],
		scale: [0.5, 0.5, 'easeOutCubic'],
		shouldAlwaysCompleteAnimation: true,
		children: (
			<div className='absolute inset-0 flex items-center justify-center'>
				<img className='w-[906px] h-[1167px] max-w-[906px] max-h-[1167px]' src='logo_noyear.svg' alt='logo' />
			</div>
		),
	}

	const foreforeground = {
		image: 'p5.png',
		translateY: [0, 1],
		scale: [1, 1, 'easeOutCubic'],
		shouldAlwaysCompleteAnimation: true,
	}

	return (
		<div className='pb-24'>
			<ParallaxBanner layers={[background, layer1, foreground, foreforeground, logo]} className='h-screen' />
		</div>
	)
}

export default Component
