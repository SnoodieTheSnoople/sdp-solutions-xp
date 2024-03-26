package sample_code;

public class sample_code4 {
    public static void main(String[] args) {
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        
        int sum = 0;
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] % 2 == 0) {
                    sum += doubleValue(matrix[i][j]);
                } else {
                    sum += tripleValue(matrix[i][j]);
                }
            }
        }
        
        System.out.println("Sum of modified matrix elements: " + sum);
    }
    
    public static int doubleValue(int n) {
        if (n % 4 == 0) {
            return n * 4;
        } else if (n % 3 == 0) {
            return n * 3;
        } else if (n % 2 == 0) {
            return n * 2;
        } else {
            return n;
        }
    }
    
    public static int tripleValue(int n) {
        if (n % 5 == 0) {
            return n * 5;
        } else if (n % 3 == 0) {
            return n * 3;
        } else if (n % 2 == 0) {
            return n * 2;
        } else {
            return n;
        }
    }
}
