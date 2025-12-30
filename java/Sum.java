import java.util.Scanner;

public class Sum {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int s=0;
        System.out.println("Enter n");
        int n=sc.nextInt();
        for(int i=0;i<=n;i++)
        {
            s=s+i;
        }
        System.out.println(s);
    }

}
