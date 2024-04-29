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
		image: 'parallax3.png',
		translateY: [0, 30],
		opacity: [1, 60],
		scale: [1, 1, 'easeOutCubic'],
		shouldAlwaysCompleteAnimation: true,
	}

	const foreground = {
		image: 'parallax4.png',
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
				<img src='logo.svg' alt='logo' />
			</div>
		),
	}

	const foreforeground = {
		image: 'parallax5.png',
		translateY: [0, 1],
		scale: [1, 1, 'easeOutCubic'],
		shouldAlwaysCompleteAnimation: true,
	}

	return (
		<div className='pb-24'>
			<ParallaxBanner layers={[background, foreground, logo, foreforeground]} className='h-96' />
		</div>
	)
}

export default Component
