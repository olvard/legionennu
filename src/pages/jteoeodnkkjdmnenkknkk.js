import CipherChallenge from '../components/CipherChallenge'

export default function CipherPage({ correctAnswers, correctFullAnswer }) {
	return <CipherChallenge correctAnswers={correctAnswers} correctFullAnswer={correctFullAnswer} />
}

export async function getServerSideProps() {
	return {
		props: {
			correctAnswers: process.env.QUESTIONS.split(','),
			correctFullAnswer: process.env.ANSWER,
		},
	}
}
