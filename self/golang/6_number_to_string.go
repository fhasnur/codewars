/*
  Convert a Number to a String!
  https://www.codewars.com/kata/5265326f5fda8eb1160004c8
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
