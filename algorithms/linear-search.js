const arr = [
	1, 5, 67, 86, 8, 34, 3, 5, 8, 0, 1, 6, 8, 33, 51, 89, 55, 213, 535, 757, 10,
	12, 15, 17,
]

// https://camo.githubusercontent.com/ad02b109905fd3d173e7c93855ef99f0f28d5d08b0ace66b17f7a8baf7d2206d/68747470733a2f2f7777772e7475746f7269616c73706f696e742e636f6d2f646174615f737472756374757265735f616c676f726974686d732f696d616765732f6c696e6561725f7365617263682e676966

function linearSearch(arr, target) {
	let iterations = 0
	// Loop through the array and compare each element with the target
	// Перебираем массив и сравниваем каждый элемент с целью
	for (let i = 0; i < arr.length; i++) {
		iterations++
		if (arr[i] === target) {
			// If the element is found, return the result
			// Если элемент найден, верните результат
			return {
				found: true,
				iterations,
			}
		}
	}
	// If the loop finishes and the element is not found, return the result
	// Если цикл завершен и элемент не найден, верните результат
	return {
		found: false,
		iterations,
	}
}

console.log(arr.length) // 24
console.log(linearSearch(arr, 0)) // { found: true, iterations: 10 }
console.log(linearSearch(arr, 1000)) // { found: false, iterations: 24 }

//complexity: O(n)
