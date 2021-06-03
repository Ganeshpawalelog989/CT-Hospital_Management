export class patient
{
      firstName:string;
      lastName:string;
      email:string;
      contact : string;
      role:string;
      Empid:string;
      dob:string;
      password:string;
      confirmPassword:string;

      constructor(firstName:string, lastName:string, email:string,contact : string,role:string,
        Empid:string,
        dob:string,
        password:string,
        confirmPassword:string )
        {
           this.firstName=firstName;
           this.lastName=lastName;
           this.email=email;
           this.contact = contact;
           this.role=role;
           this.Empid=Empid;
           this.dob=dob;
           this.password=password;
           this.confirmPassword=confirmPassword; 
        }

}