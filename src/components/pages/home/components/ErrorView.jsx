import Btn from "./Btn";
import classes from "../style/errorView.module.scss";

export default function ErrorView({ onClick }) {
  return (
    <div className={classes["container"]}>
      <h3>Sorry,Something went wrong </h3>
      <Btn btnTxt={`try again`} onClick={onClick} />
    </div>
  );
}
