import classes from "../style/btn.module.scss"

export default function Btn({onClick,btnTxt}) {
    return(

        <button className={classes["btn"]} onClick={onClick}>{btnTxt}</button>
    )
    
};
