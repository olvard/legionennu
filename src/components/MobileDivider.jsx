import Link from 'next/link'

export default function MobileDivider() {
	return (
		<div className='w-10/12 sm:w-8/12 sm:hidden block'>
			<p className='font-serif text-justify text-white opacity-75 text-3xl '>
				Sub splendōre aurōræ solis, omnia lūcet et clāret. Hīc, ubi fervēns lūx prōnūntiat, veritās ēmergitur et
				arcānīs rēbus submōtīs, cūncta palam fiunt. Nollan har ett{' '}
				<Link className='underline hover:bg-white' href='/chat'>
					lösenord.
				</Link>{' '}
				Legionen, vigil et custōs īgnis aeternī, penetrat arcānīs mūrīs et audīt omnia.
			</p>
		</div>
	)
}
