public class Test {
     public static void main(String[] args) {

        int studentId;
        String studentName;
        Student s1 = new Student (studentId = 1004, studentName ="ha");

        System.out.println(s1.studentId);

        s1.studentId = 2005;
        System.out.println(s1.studentId);

        
    }
}