package ch03.ex01;

public class C03Sign {

	public static void main(String[] args) {
		// ��ȣ ������(+ -)
		int num = -10;
		num = +num; // +(-10)
		System.out.println(num);  //-10
	
		num = -num; // -(-10)
		System.out.println(num);  //10
	
		num = 5;
		
		int num2 = -num; // -5
		System.out.println(num2);  //-5
		System.out.println(num);  //5
	
	}

}
