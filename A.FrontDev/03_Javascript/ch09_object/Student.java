public class Student {

    int studentId;
    String studentName;

    // 생성자 (constructor)
    public Student(int studentId, String studentName) {
        this.studentId = studentId;
        this.studentName = studentName;
    }

    //메소드
    public void study() {
        System.out.println("공부중입니다.");
    }
}