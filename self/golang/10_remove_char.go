/*
	Remove First and Last Character
  https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0
*/

package main

import "fmt"

func RemoveChar(word string) string {
	return word[1 : len(word)-1]
}

func main() {
	word := "fandi"
	fmt.Println(RemoveChar(word))
}
