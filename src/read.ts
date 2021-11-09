import { ReadLine } from "readline"
let readline = require("readline")

export default function askQuestion(question: string): Promise<string> {
	let readlineInterface: ReadLine = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	})

	return new Promise((resolve) => {
		readlineInterface.question(question, (answer: string) => {
			resolve(answer)
		})
	})
}