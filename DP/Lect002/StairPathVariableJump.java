import java.util.Scanner;
class StairPathVariableJump{
    //stairPathVariable jump recurision
    public static int StairPathVariable(int src,int[] ar) {
        
        if(src==ar.length)
        {
            return 1;
        }
        if(src>ar.length||ar[src]==0)
        {
            return 0;
        }
        int res=0;
        for(int i=1;i<=ar[src];i++)
        {
            res+=StairPathVariable(src+i,ar);
        }
        return res;
    }
    //stairPathVariable with memozation
    public static int StairPathVariableJumWithMemo(int src,int dest,int[] ar,int[] memo )
    {
        if(src==dest)
        {
            return 1;
        }
        if(memo[src]!=-1)
        {
            return memo[src];
        }
         
        int res=0;
        for(int i=1;i<=ar[src];i++)
        {
            if(i+src<=dest)
            {
            res+=StairPathVariableJumWithMemo(src+i,dest,ar,memo);
            }
        }
         
        return memo[src]=res;
    }

     
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        int[] ar = new int[n];
        for(int i=0;i<n;i++)
        {
            ar[i] = scn.nextInt();
        }
        scn.close();
        int[] memo = new int[n+1];
         for(int i=0;i<=n;i++)
         {
            memo[i]=-1;
         }
         
        System.out.println(StairPathVariable(0,ar));
        System.out.println(StairPathVariableJumWithMemo(0,n,ar, memo));
        
    }
}