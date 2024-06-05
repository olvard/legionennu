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
	const res = await calendar.events.list({
		calendarId: 'b3c47233db7d035dfbd4d0052f7224bbfb63cefd6de0d9d72a0c11123141913f@group.calendar.google.com',
		maxResults: 50,
		singleEvents: true,
		orderBy: 'startTime',
		q: query,
	})

	console.log('Events:', res.data.items)
	return res.data.items || []
}
