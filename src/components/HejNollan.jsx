import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function HejNollan() {
	return (
		<Card className='w-10/12 sm:w-8/12 bg-gradient-to-r from-red-700 to-red-800 border-double '>
			<CardHeader>
				<CardTitle className='text-5xl font-bold text-white'>
					Nämen hej{' '}
					<span className='bg-gradient-to-r from-red-400 via-red-400 to-red-500 inline-block text-transparent bg-clip-text'>
						nästa Legionär!
					</span>
				</CardTitle>
			</CardHeader>
			<CardContent>
				<p className='font-regular text-white'>
					Tiden är kommen… Vill du eller någon du känner vara en del av nästa års Legionen? Sök eller nominera
					fram till 16 november kl. 23:59. Röd kärlek ❤️
					<br></br>
					<br></br>
					{/* <a
						className='underline text-white'
						href='https://docs.google.com/forms/d/e/1FAIpQLSdxWbYSYGGRHbJ1YN31S1p8ZbVaM2avcoVrSDYW6K97E7Vx9Q/viewform'
					>
						Sök/Nominera här.
					</a> */}
					{/* Vad kul att du har hittat hit. Här på hemsidan kan du hitta spännande grejer och nödvändig
					information // kring vad Legionen hittar på. Legionen vill se till så att du får en så bra start på
					universitetet som // möjligt när det kommer till både plugg och studentliv. Har Nollan tappat bort
					eller glömt sin nollebok, // ingen fara, här på hemsidan finns en minst lika fin bok i digitalt
					format. På den här sidan finns också // ett schema med tider och platser för aktiviteterna under
					Nolle-P.Vi ses snart, kanske. */}
				</p>
			</CardContent>
		</Card>
	)
}

// <div className='absolute flex flex-col items-center justify-center'>
// 	<h1 className='font-bold'>Hej Nollan!</h1>
// 	<p>
// 		Vad kul att du har hittat hit. Här på hemsidan kan du hitta spännande grejer och nödvändig information
// 		kring vad Legionen hittar på. Legionen vill se till så att du får en så bra start på universitetet som
// 		möjligt när det kommer till både plugg och studentliv. Har Nollan tappat bort eller glömt sin nollebok,
// 		ingen fara, här på hemsidan finns en minst lika fin bok i digitalt format. På den här sidan finns också
// 		ett schema med tider och platser för aktiviteterna under Nolle-P.Vi ses snart, kanske.
// 	</p>
// </div>
// 	)
// }
