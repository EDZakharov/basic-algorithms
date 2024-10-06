const arr = [
	1, 5, 67, 86, 8, 34, 3, 5, 8, 0, 1, 6, 8, 33, 51, 89, 55, 213, 535, 757, 10,
	12, 15, 17,
]

// https://camo.githubusercontent.com/ea5f9314443ee1e2e26be84c5f5110d39209aecfdcebaf55893ac7a41438a924/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f382f38332f42696e6172795f5365617263685f446570696374696f6e2e737667

// Array must be sorted
// Массив должен быть отсортирован
arr.sort((a, b) => a - b)

function binarySearch(arr, target) {
	let start = 0
	let end = arr.length - 1
	let iterations = 0
	let position = 0
	// Loop until the start index is less than or equal to the end index
	// Цикл пока начальный индекс меньше или равен конечному индексу
	while (start <= end) {
		iterations++
		// Calculate the mid index
		// Вычислить средний индекс
		let middle = Math.floor((start + end) / 2)
		// If the element at the mid index is equal to the target, return the result
		// Если элемент в среднем индексе равен целевому, верните результат
		if (arr[middle] === target) {
			return {
				found: true,
				position: middle,
				iterations,
			}
		}
		// If the element at the mid index is greater than the target, move the end index to the left
		// Если элемент в среднем индексе больше целевого, переместите конечный индекс влево
		else if (arr[middle] > target) {
			end = middle - 1
		}
		// If the element at the mid index is less than the target, move the start index to the right
		// Если элемент в среднем индексе меньше целевого, переместите начальный индекс вправо
		else {
			start = middle + 1
		}
	}
	// If the loop finishes and the element is not found, return the result
	// Если цикл закончился и элемент не найден, верните результат
	return {
		found: false,
		position,
		iterations,
	}
}

console.log(arr.length) // 24
console.log(binarySearch(arr, 33)) // { found: true, position: 14, iterations: 3 }
console.log(binarySearch(arr, 1000)) // { found: false, position: 0, iterations: 5 }

//complexity: O(log n)

function recursiveBinarySearch(arr, target) {
	// Base case: if the array has one or zero elements, return false
	// Базовый случай: если массив содержит один или ноль элементов, верните false
	if (arr.length <= 1) return false
	// Calculate the mid index
	// Вычислить средний индекс
	const mid = Math.floor(arr.length / 2)
	// If the element at the mid index is equal to the target, return true
	// Если элемент в среднем индексе равен целевому, верните true
	if (arr[mid] === target) return true
	// If the element at the mid index is less than the target, search in the right half
	// Если элемент в среднем индексе меньше целевого, поиск в правой части
	if (arr[mid] < target) return recursiveBinarySearch(arr.slice(mid), target)
	// If the element at the mid index is greater than the target, search in the left half
	// Если элемент в среднем индексе больше целевого, поиск в левой части
	return recursiveBinarySearch(arr.slice(0, mid), target)
}

console.log(recursiveBinarySearch(arr, 33)) // 14

//complexity: O(log n)
