import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function HejNollan() {
	return (
		<Card className='w-10/12 sm:w-8/12 bg-gradient-to-r from-red-700 to-red-800 border-double '>
			<CardHeader>
				<CardTitle className='text-5xl font-bold text-white'>
					Nämen hej{' '}
					<span className='bg-gradient-to-r from-red-400 via-red-400 to-red-500 inline-block text-transparent bg-clip-text'>
						Nollan!
					</span>
				</CardTitle>
			</CardHeader>
			<CardContent>
				<p className='font-regular text-white'>
					Välkommen till Linköpings universitet och Nolle-P 2024! De första två veckorna kallas för Nolle-P
					och under denna tid kommer du att få lära känna universitetet, staden och dina nya vänner. Legionen
					är här för att se till att du får en så bra start på studietiden som möjligt. Denna sida innehåller
					schemat för alla aktiviteterna under Nolle-P, samt annat spännande.
					<br></br>
					<br></br>Vi ses snart, kanske.
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
