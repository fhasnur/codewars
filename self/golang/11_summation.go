/*
	Grasshopper - Summation
  https://www.codewars.com/kata/55d24f55d7dd296eb9000030
*/

package main

import "fmt"

func Summation(n int) int {
	var result int

	for i := 1; i <= n; i++ {
		result += i
	}

	return result
}

func main() {
	num := 8
	fmt.Println(Summation(num))
}
