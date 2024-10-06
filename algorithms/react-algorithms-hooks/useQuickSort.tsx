//@ts-ignore
import React, { useEffect, useState } from 'react'

// Base hook for quick sort
// Основной хук useQuickSort

type CompareFunction<T> = (a: T, b: T) => number

/**
 * Base hook for quick sort
 * @param {T[]} array - the array to sort
 * @param {keyof T} key - the key to sort by
 * @param {boolean} removeDuplicates - whether to remove duplicates
 * @param {CompareFunction<T>} compareFunction - the compare function
 * @returns {T[]} the sorted array
 */
function useQuickSort<T>(
	array: T[],
	key: keyof T,
	removeDuplicates: boolean = false,
	compareFunction?: CompareFunction<T>
): T[] {
	// State for storing the sorted array
	// Состояние для хранения отсортированного массива
	const [sortedArray, setSortedArray] = useState<T[]>([])
	// UseEffect for re-calculating the sorted array
	// useEffect для пересчета сортировки при изменении зависимостей
	useEffect(() => {
		if (!array || array.length === 0) {
			// If the array is empty, return an empty result
			// Если массив пуст, возвращаем пустой результат
			setSortedArray([])
		} else {
			const sorted = quickSort(array, key, removeDuplicates, compareFunction)
			// Recalculate the sorted array
			// Устанавливаем отсортированный массив в состояние
			setSortedArray(sorted)
		}
	}, [array, key, removeDuplicates, compareFunction])
	// Return the sorted array
	// Возвращаем готовый отсортированный массив
	return sortedArray
}

// Quick sort function with custom user logic
// Функция быстрой сортировки с поддержкой пользовательской логики

/**
 * Quick sort function
 * @template T
 * @param {T[]} array - the array to sort
 * @param {keyof T} key - the key to sort by
 * @param {boolean} removeDuplicates - whether to remove duplicates
 * @param {(a: T, b: T) => number} compareFunction - the compare function
 * @returns {T[]} the sorted array
 */
function quickSort<T>(
	array: T[],
	key: keyof T,
	removeDuplicates: boolean = false,
	compareFunction?: (a: T, b: T) => number
): T[] {
	// Base case: if the array has one or zero elements
	// Базовый случай: если массив меньше 1 элемента
	if (array.length <= 1) return array
	// Pick the pivot element
	// Выбор опорного элемента (pivot)
	const pivot = array[0]
	// left and right partitions
	const left: T[] = []
	const right: T[] = []
	// Compare function
	// Функция сравнения
	const compare = compareFunction
		? compareFunction
		: (a: T, b: T): number => {
				// Basic comparison by key
				// Стандартное сравнение по ключу
				if (a[key] < b[key]) return -1
				if (a[key] > b[key]) return 1
				// If elements are equal
				// Если элементы равны
				return 0
		  }

	// Partition the array around the pivot
	// Проход по каждому элементу массива
	for (let i = 1; i < array.length; i++) {
		// Element comparison with pivot
		// Сравниваем элемент с pivot
		const comparison = compare(array[i], pivot)

		if (comparison < 0) {
			// If the element is less than the pivot, add it to the left partition
			// Если элемент меньше опорного — добавляем в левую часть
			left.push(array[i])
		} else if (comparison > 0 || !removeDuplicates) {
			// If the element is greater than or equal to the pivot, add it to the right partition
			// Если элемент больше или дубликаты не удаляются — в правую часть
			right.push(array[i])
		}
	}
	// Recursively sort the left and right partitions and merge them with the pivot
	// Рекурсивно сортируем левую и правую части и объединяем с опорным элементом
	return [
		...quickSort(left, key, removeDuplicates, compare),
		pivot,
		...quickSort(right, key, removeDuplicates, compare),
	]
}

// Export the hook
// Экспортируем хук
export default useQuickSort

// In component
// В компоненте
//@ts-ignore
import useQuickSort from './useQuickSort'

type Contact = {
	id: number
	name: string
}

const contacts = [
	{ id: 1, name: 'Alice' },
	{ id: 2, name: 'Bob' },
	{ id: 3, name: 'Charlie' },
	{ id: 4, name: 'Dave' },
	{ id: 5, name: 'Eve' },
]

function ContactList() {
	// Sort by standard logic (alphabetical key 'name')
	// Сортировка по стандартной логике (алфавит по ключу 'name')
	const alphabetSorted = useQuickSort<Contact>(contacts, 'name')

	// Sort by length of name (custom logic)
	// Сортировка по длине имени (кастомная логика)
	const lengthSorted = useQuickSort<Contact>(
		contacts,
		'name',
		false,
		(a, b) => {
			return a.name.length - b.name.length
		}
	)

	return (
		<div>
			<h2>Alphabetically Sorted Contacts:</h2>
			<ul>
				{alphabetSorted.map((contact) => (
					<li key={contact.id}>{contact.name}</li>
				))}
			</ul>

			<h2>Sorted by Length of Name:</h2>
			<ul>
				{lengthSorted.map((contact) => (
					<li key={contact.id}>{contact.name}</li>
				))}
			</ul>
		</div>
	)
}
