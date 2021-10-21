export default function validation(values){
    let errors={}
    if(!values.username.trim()){
        errors.username="Username Required"
    }
  

    if(!values.email){
        errors.email="Email required"
    }

    if(!values.number){
        errors.number=" mobile number"
    }

    if(!values.password){
        errors.password='password is required'
    } else if(values.password.length <6){
        errors.password="password needs to be  6 characters or more"
    }
  if(!values.cpassword){
      errors.cpassword="password2 is required"
  } else if(values.password !== values.cpassword){
      errors.cpassword="password do not  match"
  }




    return errors;

}