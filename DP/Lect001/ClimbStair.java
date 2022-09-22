import java.util.Scanner;

public class ClimbStair {
    //Recursion
    public static int stair_Recursion(int n)
    {
        if(n==0||n==1)
        {
            return 1;
        }
        if(n<0)
        {
            return 0;
        }
        int res = stair_Recursion(n-1)+stair_Recursion(n-2)+stair_Recursion(n-3);
        return res;

    }
    //Recursion With Memozation
    public static int stair_Recursion_with_Memozation(int n, int[] memo)
    {
        if(n<0)
        {
            return 0;
        }
       if(n==0||n==1)
       {
        return 1;
       }
       
       int res = ((n-1>=0&&memo[n-1]!=0)?memo[n-1]:stair_Recursion_with_Memozation(n-1, memo))+((n-2>=0&&memo[n-2]!=0)?memo[n-2]:stair_Recursion_with_Memozation(n-2, memo))+((n-3>0&&memo[n-3]!=0)?memo[n-3]:stair_Recursion_with_Memozation(n-3, memo));
       if(n>=0&&memo[n]==0)
       {
        memo[n]=res;
       }
     
        return  memo[n];
    }
    //stairPath with Tabulation
    public static int stair_Tabluation(int n,  int[] tbu)
    {
        tbu[0]=1;
        tbu[1]=1;
        tbu[2]=2;
        for(int i=3;i<=n;i++)
        {
            tbu[i]=tbu[i-1]+tbu[i-2]+tbu[i-3];
        }
        return tbu[n];
    }
    //Tabulation Optimisied
    public static int stair_Tabluation_with_OPt(int n)
    {
        int f0=1;
        int f1=1;
        int f2=2;
        if(n==0||n==1)
        {
            return f1;
        }
        for(int i=3;i<=n;i++)
        {
            int t=f0+f1+f2;
            f0=f1;
            f1=f2;
            f2=t;
        }
        return f2;
    }
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        scn.close();
        System.out.println(stair_Recursion(n));
        System.out.println(stair_Recursion_with_Memozation(n,new int[n+1]));
        System.out.println(stair_Tabluation(n,new int[n+1]));
        System.out.println(stair_Tabluation_with_OPt(n));
    }
}
