package ch02.ex02;

public class C01NumberType {

	public static void main(String[] args) {
		// ���� Ÿ�԰� ������ ���ͷ�
		byte b = -128;
		short s = 32767;
		
		int i1 = 10;
		int i2 = 0b1010; // 2������ ��2 10 
		int i3 = 012;   // 8����
		int i4 = 0XA;  //16���� 
		
		System.out.println(i1);
		System.out.println("10�� 2����: " + i2);
		System.out.println("10�� 8����: " + i3);
		System.out.println("10�� 16����: " + i4);
	
		
		long l1 = 100;
		long l2 = 20000000000L; // int �����ʰ��� , L �ʼ�
		
		// �Ǽ� Ÿ�԰� �Ǽ��� ���ͷ�
		float f = 3.14F;
		double d1 = 3.14d;
		double d2 = 3.14;
	}
	
}
