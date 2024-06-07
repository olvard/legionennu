import { Card, CardContent } from '@/components/ui/card'
import Spline from '@splinetool/react-spline'

export default function Divider() {
	return (
		<Card className='w-10/12 sm:w-8/12 h-52 overflow-clip sm:flex space-x-36 hidden'>
			<Spline scene='https://prod.spline.design/t6fYnNwXRhiEDXDi/scene.splinecode' />
		</Card>
	)
}
