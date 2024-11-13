/*
	Square(n) Sum
  https://www.codewars.com/kata/515e271a311df0350d00000f
*/

package main

import "fmt"

func SquareSum(numbers []int) int {
	var result int
	for _, number := range numbers {
		result = number*number + result
	}
	return result
}

func main() {
	numbers := []int{1, 2, 2}
	fmt.Println(SquareSum(numbers))
}
