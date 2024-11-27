/*
	Counting sheep...
  https://www.codewars.com/kata/54edbc7200b811e956000556
*/

package main

import "fmt"

func CountSheeps(numbers []bool) (total int) {
	for _, number := range numbers {
		if number {
			total++
		}
	}
	return total
}

func main() {
	sheeps := []bool{
		true, true, true, false,
		true, true, true, true,
		true, false, true, false,
		true, false, false, true,
		true, true, true, true,
		false, false, true, true,
	}
	fmt.Println(CountSheeps(sheeps))
}
