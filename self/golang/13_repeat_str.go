/*
	String repeat
  https://www.codewars.com/kata/57a0e5c372292dd76d000d7e
*/

package main

import (
	"fmt"
	"strings"
)

func RepeatStr(repetitions int, value string) string {
	return strings.Repeat(value, repetitions)
}

func main() {
	fmt.Println(RepeatStr(5, "F"))
}
