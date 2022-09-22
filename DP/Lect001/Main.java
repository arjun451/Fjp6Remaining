import java.util.Scanner;

class Main{
    public static int fib_recursion(int n)
    {
        if(n==0||n==1)
        {
            return n;
        }
        int res = fib_recursion(n-1)+fib_recursion(n-2);
        return res;
    }
    public static int fib_recursion_With_Memoziation(int n, int[] memo)
    {
        if(n==0||n==1)
        {
            memo[n]=n;
            return n;
        }
        int res = ((memo[n-1]!=0)?memo[n-1]:fib_recursion_With_Memoziation(n-1, memo))+((memo[n-2]!=0)?memo[n-2]:fib_recursion_With_Memoziation(n-2, memo));
        memo[n]=res;
        return res;

    }
    public static int fib_Tabluation(int n,int[] tabu)
    {
        tabu[0]=0;
        tabu[1]=1;
        for(int i=2;i<=n;i++)
        {
            tabu[i]=tabu[i-1]+tabu[i-2];
        }
        return tabu[n];
    }
    public static int fib_Tabluation_Optimised(int n)
    {
        if(n==0||n==1)
        {
            return n;
        }
        int first=0;
        int second=1;
        for(int i=2;i<=n;i++)
        {
            int temp = first+second;
            first=second;
            second = temp;
        }
        return second;
    }

    public static void main(String[] args) {
        
        Scanner scn  = new Scanner(System.in);
        int n = scn.nextInt();
        scn.close();
        System.out.println(fib_recursion(n));
        System.out.println(fib_recursion_With_Memoziation(n,new int[n+1]));
        System.out.println(fib_Tabluation(n, new int[n+1]));
        System.out.println(fib_Tabluation_Optimised(n));
        
    }
}