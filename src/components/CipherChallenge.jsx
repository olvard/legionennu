import React, { useState } from 'react'

const CipherChallenge = ({ correctAnswers, correctFullAnswer }) => {
	// State to manage user answers and input
	const [answers, setAnswers] = useState(['', '', '', '', ''])
	const [message, setMessage] = useState('')

	// Handle individual answer input
	const handleAnswerChange = (index, value) => {
		const newAnswers = [...answers]
		newAnswers[index] = value
		setAnswers(newAnswers)
	}

	// Check if the cipher is solved
	const checkCipher = () => {
		// Ensure all answers are filled
		if (answers.some((answer) => answer === '')) {
			setMessage('nä äe')
			return
		}

		// Check if the full answer matches exactly
		const isCorrect = answers[4] === correctFullAnswer
		setMessage(isCorrect ? 'bana 5B - https://rasmussvala.itch.io/cheddar-chase' : 'nä äe')
	}

	return (
		<div className='max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md'>
			<h2 className='text-2xl font-bold mb-4 text-center'>Några ganska svåra frågor</h2>
			{/* Questions */}
			<div className='space-y-4'>
				<div>
					<label className='block mb-2'>1. 3 * 9?</label>
					<input
						type='text'
						value={answers[0]}
						onChange={(e) => handleAnswerChange(0, e.target.value)}
						className='w-full px-3 py-2 border rounded'
						placeholder='Your answer'
					/>
				</div>
				<div>
					<label className='block mb-2'>2. Antalet snabbkassor på ICA?</label>
					<input
						type='text'
						value={answers[1]}
						onChange={(e) => handleAnswerChange(1, e.target.value)}
						className='w-full px-3 py-2 border rounded'
						placeholder='Your answer'
						disabled={!answers[0]}
					/>
				</div>
				<div>
					<label className='block mb-2'>3. Översta raden i denna kanske</label>
					<img src='/sudoku.png' alt='Sudoku' className='w-full mb-2' />
					<input
						type='text'
						value={answers[2]}
						onChange={(e) => handleAnswerChange(2, e.target.value)}
						className='w-full px-3 py-2 border rounded'
						placeholder='Your answer'
						disabled={!answers[1]}
					/>
				</div>
				<div>
					<label className='block mb-2'>
						4. 5000 guldfiskar i en tank, 396 drunknar, 2874 simmar iväg, 3 av dem får var sitt barn som
						heter Pelle, Marcus och KATRIN, hur många finns kvar efter 10 minuter?
					</label>
					<input
						type='text'
						value={answers[3]}
						onChange={(e) => handleAnswerChange(3, e.target.value)}
						className='w-full px-3 py-2 border rounded'
						placeholder='Your answer'
						disabled={!answers[2]}
					/>
				</div>
				<div>
					<label className='block mb-2'>Lägg in dina svar i rätt ordning:</label>
					<input
						type='text'
						value={answers[4]}
						onChange={(e) => handleAnswerChange(4, e.target.value)}
						className='w-full px-3 py-2 border rounded'
						placeholder='Your answer'
						disabled={!answers[3]}
					/>
				</div>
			</div>
			{/* Check Button */}
			<button
				onClick={checkCipher}
				className='mt-6 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition'
			>
				jaha
			</button>
			{/* Message Display */}
			{message && (
				<div
					className={`mt-4 p-3 text-center rounded ${
						message.includes('gratulerar') ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
					}`}
				>
					{message}
				</div>
			)}
		</div>
	)
}

export default CipherChallenge
