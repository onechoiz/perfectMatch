import classes from '../style/input.module.scss'
export default function Input({placeholder, onChange}) {
    return (
             <input className={classes['inputs']} type="text" placeholder={placeholder} onChange= {onChange}/>
    )
};
