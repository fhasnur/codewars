/*
  Sum of positive
  https://www.codewars.com/kata/5715eaedb436cf5606000381
*/

package main

import "fmt"

func PositiveSum(numbers []int) int {
	var result int
	for _, number := range numbers {
		if number > 0 {
			result += number
		}
	}
	return result
}

func main() {
	numbers := []int{1, -4, 7, 12}
	result := PositiveSum(numbers)
	fmt.Println(result)
}
