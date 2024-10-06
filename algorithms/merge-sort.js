const arr = [
	1, 5, 67, 86, 8, 34, 3, 5, 8, 0, 1, 6, 8, 33, 51, 89, 55, 213, 535, 757, 10,
	12, 15, 17,
]
// https://camo.githubusercontent.com/60fb75fa20c2df40342fe3b948c83b3c3d755a770b0eca988148a208338c7180/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f632f63632f4d657267652d736f72742d6578616d706c652d33303070782e676966

// https://camo.githubusercontent.com/172683198232d4d32dd0b07e14daadb98d475fde6516e94fe1f0c7a82894113c/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f652f65362f4d657267655f736f72745f616c676f726974686d5f6469616772616d2e737667

function mergeSort(arr) {
	// Base case: if the array has one or zero elements, return it
	// Базовый случай: если массив содержит один или ноль элементов, верните его
	if (arr.length <= 1) return arr

	// Calculate the mid index
	// Вычислить средний индекс
	const mid = Math.floor(arr.length / 2)
	// Split the array into two halves
	// Разбиение массива на две половины
	const left = arr.slice(0, mid)
	const right = arr.slice(mid)

	// Recursively sort the left and right halves
	// Рекурсивно сортируем левую и правую половины
	return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
	const result = []

	// Go through the arrays and compare each pair of elements
	// Перебираем массивы и сравниваем пары элементов
	while (left.length && right.length) {
		if (left[0] < right[0]) {
			// Take the smaller element from the left array
			// Берем меньший элемент из левого массива
			result.push(left.shift())
		} else {
			// Take the smaller element from the right array
			// Берем меньший элемент из правого массива
			result.push(right.shift())
		}
	}

	// Add the remaining elements from the arrays
	// Добавляем оставшиеся элементы из массивов
	return [...result, ...left, ...right]
}

console.log(mergeSort(arr)) // [ 0, 1, 1, 3, 5, 5, 6, 8, 8, 8, 10, 12, 15, 17, 33, 34, 51, 55, 67, 86, 89, 213, 535, 757 ]

// complexity: O(n log n)
