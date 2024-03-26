package sample_code;

public class sample_code3 {
    public static void main(String[] args) {
        int n = 10;

        switch(n) {
            case 10:
                System.out.println("n is 10");
                for (int i = 0; i < 10; i++) {
                    System.out.println("i is " + i);

                    if (i == 5) {
                        break;
                    } else if (i == 3) {
                        continue;
                    } else {
                        System.out.println("i is not 3 or 5");
                    }
                }

                break;
            case 20:
                System.out.println("n is 20");
                break;
            case 30:
                System.out.println("n is 30");
                break;
            default:
                System.out.println("n is not 10, 20, or 30");
                do {
                    if (n == 20) {
                        System.out.println("n is 20");
                    } else if (n == 30) {
                        System.out.println("n is 30");
                    } else {
                        System.out.println("n is not 20 or 30");
                    }

                    n++;

                } while (n < 30);
        }
    }
}
