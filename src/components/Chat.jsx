import { useState } from 'react'

const Chat = ({ unlockCodes }) => {
	const [message, setMessage] = useState('')
	const [conversation, setConversation] = useState([])
	const [tokenCount, setTokenCount] = useState(0) // For token limit
	const [notification, setNotification] = useState('') // For notifications
	const [isUnlocked, setIsUnlocked] = useState(false) // To check if chat is unlocked
	const [unlockCode, setUnlockCode] = useState('') // Store the unlock code

	const handleUnlock = () => {
		if (unlockCodes == unlockCode) {
			setIsUnlocked(true)
		} else {
			alert('Fel kod, försök igen.')
		}
	}

	const sendMessage = async () => {
		if (!message.trim()) return

		const newConversation = [...conversation, { sender: 'user', text: message }]
		setConversation(newConversation)
		setMessage('')

		try {
			const response = await fetch('/api/openai', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					message,
					tokenCount, // Pass the current token count
				}),
			})

			const data = await response.json()

			if (data.tokenCount !== undefined) {
				setTokenCount(data.tokenCount) // Update token count
			}

			if (data.notification) {
				setNotification(data.notification) // Set notification message
			}

			if (data.error) {
				alert(data.error)
				return
			}

			setConversation([...newConversation, { sender: 'bot', text: data.message }])
		} catch (error) {
			console.error(error)
			setConversation([
				...newConversation,
				{ sender: 'bot', text: 'Något har gått fel. Försök igen senare kanske.' },
			])
		}
	}

	return (
		<div className='container mx-auto p-4 pt-12 max-w-2xl'>
			<h1 className='text-2xl font-bold font-serif '>LegganChat™</h1>

			{!isUnlocked ? (
				// Display unlock code input box
				<div className='flex flex-col '>
					<p className='mb-4'>Ange ett lösenord:</p>
					<input
						type='password'
						value={unlockCode}
						onChange={(e) => setUnlockCode(e.target.value)}
						className='border p-2 font-serif rounded-md'
						placeholder='Ange kod...'
					/>
					<button
						onClick={handleUnlock}
						className='bg-accent text-white p-2 mt-4 font-serif rounded-md md:w-2/12'
					>
						Lås upp
					</button>
				</div>
			) : (
				// Display chat interface
				<>
					<div className='chat-box border rounded-md p-4 h-96 overflow-y-scroll'>
						{conversation.map((chat, index) => (
							<div
								key={index}
								className={`message ${chat.sender === 'bot' ? 'text-left' : 'text-right'}`}
							>
								<p
									className={`${
										chat.sender === 'bot' ? 'bg-blue-200' : 'bg-green-200'
									} inline-block p-2 my-2 rounded`}
								>
									{chat.text}
								</p>
							</div>
						))}
					</div>
					{notification && (
						<div className='mt-2 p-2 bg-yellow-300 text-yellow-900 rounded'>{notification}</div>
					)}
					<div className='mt-4 flex'>
						<input
							type='text'
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							className='border p-2 flex-grow font-serif rounded-md'
							placeholder='Skriv ett meddelande till legionen...'
							onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
						/>
						<button onClick={sendMessage} className='bg-accent text-white p-2 ml-2 font-serif rounded-md'>
							Skicka
						</button>
					</div>
				</>
			)}
		</div>
	)
}

export default Chat
