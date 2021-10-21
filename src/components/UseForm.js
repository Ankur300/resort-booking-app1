import { useState } from "react";
import validation from "./validation";
const initialvalues={
    username:'',
    email:'',
    number:'',
    password:'',
    cpassword:''

}


const useForm=()=>{
    const [values,setValuse]=useState(initialvalues)


    const [errors,seterror]=useState({});


    const handleChange =(e)=>{
        setValuse({
            ...values,
           [e.target.name ]:e.target.value
           
        })
        console.log(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        seterror(validation(values))
    }

    return { handleChange, values ,errors, seterror}
}

export default useForm