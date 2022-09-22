import java.util.Scanner;

class StairPathVariableJump{
    //stairPathVariable jump recurision
    public static int StairPathVariable(int n) {
        
        if(n==0||n==1)
        {
            return 1;
        }
        int res=0;
        for(int i=1;i<=n;i++)
        {
            res+=StairPathVariable(n-i);
        }
        return res;
    }
    //stairPathVariable with memozation
    public static int StairPathVariableJumWithMemo(int n,int[] memo)
    {
        if(n==0||n==1)
        {
            return 1;
        }
        int res=0;
        for(int i=1;i<=n;i++)
        {
         res+=(memo[n-i]!=0)?memo[i]:StairPathVariableJumWithMemo(n-i,memo);
        }
        memo[n]=res;
        return res;
    }
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        scn.close();
        System.out.println(StairPathVariable(n));
        System.out.println(StairPathVariableJumWithMemo(n,new int[n+1]));

    }
}