// Advanced Teacher interface with different property types
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  
  // index signature - allows any additional string properties
  [key: string]: any;
}

interface Director extends Teacher {
  numberOfReports: number;  // Additional required property for Directors
}

// Function interface - defines the shape/signature of a function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}


function printTeacher({ firstName, lastName }: { firstName: string, lastName: string }): string {
    return `${firstName}. ${lastName}`;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

