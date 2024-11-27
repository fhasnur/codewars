/*
	Remove String Spaces
  https://www.codewars.com/kata/57eae20f5500ad98e50002c5
*/

package main

import (
	"fmt"
	"strings"
)

func NoSpace(word string) (result string) {
	splitWord := strings.Split(word, " ")

	for _, sw := range splitWord {
		result += sw
	}

	return result
}

func main() {
	word := "8 j 8   mBliB8g  imjB8B8  jl  B"
	fmt.Println(NoSpace(word))
}
