import java.util.*;
class Digitanalyzer{ 
    int c=0;
    void countDigit(int num,int d){
        int temp=num;
        
        while(num>0){
            temp=num%10;
            if(temp==d){
                c++;
            
            }num=num/10;
          
        }}
        
    void display(){
        System.out.println("count"+c);
    }

    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int dd=sc.nextInt();
        Digitanalyzer dc= new Digitanalyzer();
        dc.countDigit(n,dd);
        dc.display();
    }
    }
