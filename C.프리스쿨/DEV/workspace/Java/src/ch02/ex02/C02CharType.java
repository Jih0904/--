package ch02.ex02;

public class C02CharType {
	public static void main(String[] args) {
		//  문자 타입과 리터럴
					char c1 = '가';     // 문자
					char c2 = 0xAC00;  // 유니코드 (16진수)
					char c3 = 44032;   // 유니코드 (10진수)
					char c4 = '\uAC00'; // 유니코드 문자
					
					System.out.println(c1); // 가 (디코딩)
					System.out.println(c2); //가
					System.out.println(c3); //가
					System.out.println(c4); //가
					
					// 유니코드 인코딩
					int i1 = '가';  // '가'(문자) -> 44032(숫자)
					int i2 = '\uAC00';
					
					System.out.println(i1);  //44032
					System.out.println(i2);  //44032
	}
}
