/*
	Opposite number
  https://www.codewars.com/kata/56dec885c54a926dcd001095
*/

package main

import "fmt"

func Opposite(value int) int {
	return -value
}

func main() {
	value := 5
	fmt.Println(Opposite(value))
}
