import { NumberTuple } from "./src/types"
import askQuestion from "./src/read"
import { calculateForSem } from "./src/functions"

async function main() {
	let gradeScale: number = 10
	let acquiredCredits: number = 0
	let totalCredits: number = 0

	let numberOfSems: number = parseInt(
		await askQuestion("How many semesters do you have? ")
	)

	for (let i: number = 0; i < numberOfSems; i++) {
		let { gpa, totalGrades }: NumberTuple = await calculateForSem()
		acquiredCredits += (totalGrades * gpa) / gradeScale
		totalCredits += totalGrades
	}

	let cgpa: number = (acquiredCredits / totalCredits) * gradeScale

	console.log(`Your CGPA is ${cgpa}`)
	return cgpa
}

main()