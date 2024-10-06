const arr = [
	1, 5, 67, 86, 8, 34, 3, 5, 8, 0, 1, 6, 8, 33, 51, 89, 55, 213, 535, 757, 10,
	12, 15, 17,
]

// https://camo.githubusercontent.com/939071f3bb5ef7b59685abff2bc7ce513a2a6df100fe454ae18b4608da3397b4/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f362f36612f536f7274696e675f717569636b736f72745f616e696d2e676966

let iterations = 0

// Quicksort is a divide and conquer algorithm. Quicksort first divides a large array into two smaller sub-arrays: the low elements and the high elements. Quicksort can then recursively sort the sub-arrays.
// Быстрая сортировка — это алгоритм «разделяй и властвуй». Быстрая сортировка сначала делит большой массив на два меньших подмассива: нижние элементы и верхние элементы. Затем быстрая сортировка может рекурсивно сортировать подмассивы

function quickSort(array) {
	// Base case: if the array has one or zero elements, return it
	// Базовый случай: если массив содержит один или ноль элементов, верните его
	if (array.length <= 1) return array
	// Pick the pivot element: the first element of the array
	// Выберите опорный элемент: может быть первым элементом массива
	let pivot = array[0]
	// Create two empty arrays for the left and right partitions
	// Создайте два пустых массива для левой и правой частей
	let left = []
	let right = []
	// Partition the array around the pivot element
	// Разбиение массива вокруг элемента-указателя
	for (let i = 1; i < array.length; i++) {
		if (array[i] < pivot) {
			// If the element is less than the pivot, add it to the left partition
			// Если элемент меньше указателя, добавьте его в левую часть
			left.push(array[i])
		} else {
			// Otherwise, add it to the right partition
			// В противном случае, добавьте его в правую часть
			right.push(array[i])
		}
		iterations++
	}
	// Recursively sort the left and right partitions
	// Рекурсивно сортируем левой и правой частей
	return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort(arr), iterations) // [ 0, 1, 1, 3, 5, 5, 6, 8, 8, 8, 10, 12, 15, 17, 33, 34, 51, 55, 67, 86, 89, 213, 535, 757 ], iterations: 117

// complexity: O(n log n)
