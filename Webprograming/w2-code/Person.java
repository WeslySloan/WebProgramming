public class Person {
  String firstName;   String lastName;
  Person(String firstName, String lastName) {
    this.firstName = firstName;   this.lastName = lastName;
  }
  String getName() { return this.lastName + " " + this.firstName; }
  String getLastName() { return "Mr. " + this.lastName; }

  public static void main(String[] args) {
    Person person = new Person("Gildong", "Hong");
    System.out.println(person.getName());     // Hong Gildong
    System.out.println(person.getLastName()); // Mr. Hong
  }
}
