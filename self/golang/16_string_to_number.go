/*
	Convert a String to a Number!
  https://www.codewars.com/kata/544675c6f971f7399a000e79
*/

package main

import (
	"fmt"
	"strconv"
)

func StringToNumber(str string) int {
	num, _ := strconv.Atoi(str)
	return num
}

func main() {
	str := "16"
	fmt.Println(StringToNumber(str))
}
