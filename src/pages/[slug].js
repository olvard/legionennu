// File: /pages/[slug].js
import CipherChallenge from '../components/CipherChallenge'

export default function CipherPage({ correctAnswers, correctFullAnswer }) {
	return <CipherChallenge />
}

export async function getServerSideProps(context) {
	const { slug } = context.params

	if (slug !== 'jteoeodnkkjdmnenkk') {
		return {
			notFound: true, // Return 404 for invalid slugs
		}
	}

	return {
		props: {}, // Pass any required props here
	}
}
