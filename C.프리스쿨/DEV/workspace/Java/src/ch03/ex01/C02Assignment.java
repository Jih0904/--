package ch03.ex01;

public class C02Assignment {
	public static void main(String[] args) {
		// ���� ������
		int a = 1, b = 2;
		System.out.printf("a: %d, b: %d\n", a, b); // a: 1, b: 2   \n�ٹٲ�
		
		
		a = b; //a�� b�� ����
		System.out.printf("a: %d, b: %d\n", a, b); // a: 2, b: 2
		
		 a = a+1;
		System.out.printf("a: %d, b: %d\n", a, b); // 3
		
		
		// ���մ��Կ�����
		int i = 3;
		
		i = i + 2;	// 5 i = 3 + 2 
		i +=2;		// 7 i = i + 2 = 5 + 2 =7
		i -= 2;		// 5 i = i - 2 = 7 - 5 =5
		i *=2; 		// 10 i = i * 2 = 5 * 2 = 10
		i /=2;   	//  5  i = i / 2 = 10 / 2 = 5
		i %=2;  	// 1 i = i % 2 = 5 % 2 = 1
		
		System.out.println(i); // 1
	}
}
