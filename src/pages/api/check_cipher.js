export default async function handler(req, res) {
	if (req.method === 'POST') {
		const { answer } = req.body

		// Your verification logic
		const isCorrect = answer === process.env.ANSWER

		if (isCorrect) {
			res.status(200).json({
				message: 'bana 5B - https://rasmussvala.itch.io/cheddar-chase',
			})
		} else {
			res.status(400).json({ message: 'nä äe' })
		}
	} else {
		res.status(405).json({ message: 'Method not allowed' })
	}
}
