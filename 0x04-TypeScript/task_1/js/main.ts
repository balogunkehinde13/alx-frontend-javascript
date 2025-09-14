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

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}