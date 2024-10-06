const arr = [
	1, 5, 67, 86, 8, 34, 3, 5, 8, 0, 1, 6, 8, 33, 51, 89, 55, 213, 535, 757, 10,
	12, 15, 17,
]

function selectionSort(array) {
	let iterations = 0
	for (let i = 0; i < array.length; i++) {
		// set the indexMin to the current index
		// установите индексMin на текущий индекс
		let indexMin = i
		// loop through the array and find the smallest element
		// переберём массив и найдите наименьший элемент
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < array[indexMin]) {
				// update the indexMin if the element is smaller
				// обновите индексMin, если элемент меньше
				indexMin = j
			}
			iterations++
		}
		// swap the elements at the current index and the indexMin
		// поменяйте местами элементы в текущем индексе и индексMin
		let tmp = array[i]
		array[i] = array[indexMin]
		array[indexMin] = tmp
	}

	return { array, iterations }
}

console.log(selectionSort(arr)) // { array: [ 0, 1, 1, 3, 5, 5, 6, 8, 8, 8, 10, 12, 15, 17, 33, 34, 51, 55, 67, 86, 89, 213, 535, 757 ], iterations: 276 }

// complexity: O(n^2)
