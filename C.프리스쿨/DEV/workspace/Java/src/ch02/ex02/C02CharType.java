package ch02.ex02;

public class C02CharType {
	public static void main(String[] args) {
		//  ���� Ÿ�԰� ���ͷ�
					char c1 = '��';     // ����
					char c2 = 0xAC00;  // �����ڵ� (16����)
					char c3 = 44032;   // �����ڵ� (10����)
					char c4 = '\uAC00'; // �����ڵ� ����
					
					System.out.println(c1); // �� (���ڵ�)
					System.out.println(c2); //��
					System.out.println(c3); //��
					System.out.println(c4); //��
					
					// �����ڵ� ���ڵ�
					int i1 = '��';  // '��'(����) -> 44032(����)
					int i2 = '\uAC00';
					
					System.out.println(i1);  //44032
					System.out.println(i2);  //44032
	}
}
