import HeartSVG from "./Heart";
import { useState, useEffect } from "react";
import Name from "./Name";
import classes from "../style/results.module.scss";

export default function Results({
  firstName,
  secondName,
  message,
  progress,
  innerHeartMsg,
}) {
  return (
    <div className={classes["container"]}>
      <div className={classes["names"]}>
        <Name  txt={firstName} />
     
        <Name txt={secondName} />
      </div>

      <HeartSVG progress={progress} innerHeartMsg={innerHeartMsg} />

      <p className={classes["msg"]}>{message}</p>
    </div>
  );
}
