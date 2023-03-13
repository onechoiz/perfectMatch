import { useEffect, useState } from "react";
import Btn from "./Btn";
import Input from "./Input";
import classes from '../style/dataInputs.module.scss'
   export default function DataInput({handleFirstName,handlesecName,handleCheck}) {

    return(

        <div className={classes["container"]} >
        <Input onChange={handleFirstName} placeholder={`your name`}/>
        <Input onChange={handlesecName} placeholder={`your crash`}/>
        <Btn btnTxt={`check compatability`} onClick={handleCheck}/>
            
        </div>
    )
    
   };
   

