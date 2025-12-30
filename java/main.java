import java.util.*;
class Main{
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in) ;
        System.out.println("Enter 2 numbers");
        int a=sc.nextInt();
        int b=sc.nextInt();
        int s,m,d,q;
        s=a+b;
        m=a*b;
        d=a-b;
        q=a%b;
        System.out.println("sum="+s);
        System.out.println("diff="+d);
        System.out.println("product="+m);
        System.out.println("quoitent="+q);
    }
}