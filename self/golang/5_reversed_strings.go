/*
  Reversed Strings
  https://www.codewars.com/kata/5168bb5dfe9a00b126000018
*/

package main

import "fmt"

func ReversedStrings(word string) string {
	var result string
	for _, w := range word {
		result = string(w) + result
	}
	return result
}

func main() {
	word := "fandi"
	fmt.Println(ReversedStrings(word))
}
