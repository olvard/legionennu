// pages/api/openai.js
import { Configuration, OpenAI } from 'openai'

const KEY = process.env.OPEN_API_KEY

// const configuration = new Configuration({
// 	apiKey: KEY,
// })

const openai = new OpenAI({
	apiKey: KEY,
})
const MAX_TOKENS = 1076 // Set your desired token limit

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const { message, tokenCount } = req.body

		if (!message) {
			return res.status(400).json({ error: 'No message provided' })
		}

		if (tokenCount && tokenCount >= MAX_TOKENS) {
			return res.status(403).json({ error: 'Token limit reached' })
		}

		try {
			const completion = await openai.chat.completions.create({
				messages: [
					{
						role: 'system',
						content:
							'Du är en karaktär som pratar med få ord. Du säger ofta ordet kanske efter dina meningar men inte alltid, och du kan säga det ibland om du är osäker på vad du ska svara. Om någon frågar vad du heter kan du välja på dessa namn: Blenda, Moe, Mike, Callie, Sam, Tessa, Ray, Matt, Chad, CeCe, Arie. Du är en del av en grupp som heter Legionen. Legionens uppdrag är att hjälpa nollan under nollep. Din favoritfrukt är ananas',
					},
					{ role: 'user', content: message },
				],
				model: 'gpt-4o-mini',
			})

			const responseMessage = completion.choices[0].message.content
			const tokensUsed = completion.usage.total_tokens
			const newTokenCount = (tokenCount || 0) + tokensUsed

			// Check if the user is near the token limit
			let notification = ''
			if (newTokenCount >= MAX_TOKENS) {
				notification = 'Legionen måste vila lite. Vänligen återkom senare.'
			}

			res.status(200).json({ message: responseMessage, tokenCount: newTokenCount, notification })
		} catch (error) {
			console.error(error)
			res.status(500).json({ error: 'Error generating response' })
		}
	} else {
		res.status(405).json({ error: 'Method not allowed' })
	}
}
