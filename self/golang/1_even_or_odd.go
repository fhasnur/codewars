/*
  Even or Odd
  https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
*/

package main

import "fmt"

func EvenOrOdd(number int) string {
	if number%2 == 0 {
		return "Even"
	} else {
		return "Odd"
	}
}

func main() {
	fmt.Println(EvenOrOdd(2))
}
