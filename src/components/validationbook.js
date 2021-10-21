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
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    if(values.chIn >= date){
        errors.chIn="Check In Date should be after today"
    }
    if(values.chIn>values.chOut){
        errors.chOut="Check Out Date should be greater than Check In"
    }




    return errors;

}