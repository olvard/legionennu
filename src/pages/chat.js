import Chat from '../components/Chat'

export default function chat({ unlockCodes }) {
	return <Chat unlockCodes={unlockCodes} />
}

export async function getServerSideProps() {
	return {
		props: {
			unlockCodes: process.env.UNLOCK_CODES_2,
		},
	}
}
