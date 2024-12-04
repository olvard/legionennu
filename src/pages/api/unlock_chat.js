// api/unlock.js
export default async function handler(req, res) {
	try {
		const { unlockCode } = req.body

		// Safely compare codes
		const isValid = unlockCode === process.env.UNLOCK_CODES_2

		console.log('server')

		if (isValid) {
			res.status(200).json({ success: true })
		} else {
			res.status(401).json({ error: 'Invalid unlock code' })
		}
	} catch (error) {
		console.error('Unlock error:', error)
		res.status(500).json({ error: 'Server error', details: error.message })
	}
}
