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

