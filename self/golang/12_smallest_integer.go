/*
	Find the smallest integer in the array
  https://www.codewars.com/kata/55a2d7ebe362935a210000b2
*/

package main

import "fmt"

func SmallestIntegerFinder(numbers []int) (min int) {
	if len(numbers) > 0 {
		min = numbers[0]
	}

	for i := 1; i < len(numbers); i++ {
		if numbers[i] < min {
			min = numbers[i]
		}
	}

	return
}

func main() {
	numbers := []int{34, -345, -1, 100}
	fmt.Println(SmallestIntegerFinder(numbers))
}
