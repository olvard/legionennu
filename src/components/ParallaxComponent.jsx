import { Parallax, ParallaxLayer } from '@react-spring/parallax'
export default function ParallaxComponent() {
	return (
		<Parallax pages={3}>
			<ParallaxLayer offset={0} speed={0.5} style={{ backgroundColor: '#805E73' }} />
			<ParallaxLayer offset={1} speed={0.5} style={{ backgroundColor: '#87BCDE' }} />
			<ParallaxLayer offset={2} speed={0.5} style={{ backgroundColor: '#87BCDE' }} />
		</Parallax>
	)
}
