import askQuestion from "./read"
import { SubjectObject, GpaArray } from "./types"

export function calculateCGPA(subjects: SubjectObject[]): number {
	let totalCgpa: number = 0
	let totalCredits: number = 0
	subjects.forEach((subject) => {
		totalCgpa += subject.grade * subject.points
		totalCredits += subject.points
	})
	return totalCgpa / totalCredits
}

export async function calculateForSem() {
	let subjects: Number = parseInt(
		await askQuestion(`Enter number of Subjects: `)
	)
	let subjectArray: SubjectObject[] = []
	let totalGrades: number = 0

	for (let i = 0; i < subjects; i++) {
		let subjectName = await askQuestion(`Enter Subject Name: `)
		let subjectPoints = parseFloat(
			await askQuestion(`Enter Assigned Points for ${subjectName}: `)
		)
		let subjectGrade = parseFloat(
			await askQuestion(`Enter Awarded Grade for ${subjectName}: `)
		)

		subjectArray[i] = {
			name: subjectName,
			points: subjectPoints,
			grade: subjectGrade,
		}
		totalGrades += subjectPoints
	}

	let gpa = calculateCGPA(subjectArray)
	console.log("CGPA: " + gpa)

	return {
		gpa: gpa,
		totalGrades,
	}
}