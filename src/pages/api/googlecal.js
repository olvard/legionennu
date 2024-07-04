import { google } from 'googleapis'

const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly']
const SERVICE_ACCOUNT_KEY = process.env.CREDS

export default async function handler(req, res) {
	try {
		const { q } = req.query
		const query = q || 'MT' // Default query is 'MT' if none is provided

		console.log('inside server')
		const auth = await getAuth()

		const events = await listEvents(auth, q)
		res.status(200).json(events)
	} catch (error) {
		console.error('Error:', error)
		res.status(500).json({ error: 'Internal server error' })
	}
}

async function getAuth() {
	try {
		const credentials = JSON.parse(SERVICE_ACCOUNT_KEY)

		const auth = new google.auth.GoogleAuth({
			credentials,
			scopes: SCOPES,
		})

		return auth.getClient()
	} catch (error) {
		console.error('Error loading service account credentials:', error)
		return null
	}
}

async function listEvents(auth, query) {
	const calendar = google.calendar({ version: 'v3', auth })

	let current_cal = 'b3c47233db7d035dfbd4d0052f7224bbfb63cefd6de0d9d72a0c11123141913f@group.calendar.google.com'

	if (query !== 'MT') {
		current_cal = 'a5ceffd219c864222c7717aa24e386d764f31b47e3e5a4ec51ac2831e7ccc9ad@group.calendar.google.com'
	}

	const res = await calendar.events.list({
		// a5ceffd219c864222c7717aa24e386d764f31b47e3e5a4ec51ac2831e7ccc9ad@group.calendar.google.com
		calendarId: current_cal,
		maxResults: 50,
		singleEvents: true,
		orderBy: 'startTime',
		
	})

	console.log('Events:', res.data.items)
	return res.data.items || []
}
