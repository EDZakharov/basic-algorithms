const arr = [
	1, 5, 67, 86, 8, 34, 3, 5, 8, 0, 1, 6, 8, 33, 51, 89, 55, 213, 535, 757, 10,
	12, 15, 17,
]

function bubbleSort(array) {
	let iterations = 0
	for (let i = 0; i < array.length; i++) {
		// go through the array and compare each pair of elements
		// перебираем массив и сравниваем пары элементов
		for (let j = 0; j < array.length - 1; j++) {
			if (array[j] > array[j + 1]) {
				// swap the elements if they are not in order
				// меняем местами элементы, если они не в правильном порядке
				let tmp = array[j]
				array[j] = array[j + 1]
				array[j + 1] = tmp
			}
			iterations++
		}
	}
	return { array, iterations }
}

console.log(bubbleSort(arr)) // { array: [ 0, 1, 1, 3, 5, 5, 6, 8, 8, 8, 10, 12, 15, 17, 33, 34, 51, 55, 67, 86, 89, 213, 535, 757 ], iterations: 552 }

// complexity: O(n^2)
