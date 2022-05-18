package ch02.ex02;

public class C03DataType {

	public static void main(String[] args) {
		//정수 타입
		byte b = 0;  	 //1byte
		short s = 0;	//2byte
		int i = 0;		//4byte
		long l = 0L;		//8byte
		
		// 실수 타입
		float f = 0.0f; //4byte
		double d = 0.0d; //8byte
		
		// 문자 타입
		char c = '가';  //2byte
		char c2 = 0;
		
		// 논리 타입
		boolean b2 = true;
		boolean b3 = false;
		
		// String 타입  
		String myName = "배고파"; // 대문자로 시작하는건 클래스명 
		System.out.println("배고파");
		System.out.println(myName);
	}

	
}
