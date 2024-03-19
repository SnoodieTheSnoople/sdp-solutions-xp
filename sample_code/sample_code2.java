package sample_code;

public class sample_code2 {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        int number = 15;

        if (number % 3 == 0) {
            System.out.println("Fizz");
        } else if (number % 5 == 0) {
            System.out.println("Buzz");
        } else {
            System.out.println("FizzBuzz");
        }
    }
}