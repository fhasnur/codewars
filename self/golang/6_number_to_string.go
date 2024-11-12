/*
  Convert a Number to a String!
  https://www.codewars.com/kata/5168bb5dfe9a00b126000018
*/

package main

import (
	"fmt"
	"strconv"
)

func NumberToString(n int) string {
	return strconv.Itoa(n)
}

func main() {
	num := 5
	fmt.Println(NumberToString(num))
}
