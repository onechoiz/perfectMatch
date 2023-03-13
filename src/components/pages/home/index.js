import { useEffect, useState } from "react";
import Loading from "../../reusable/Loading";
import BrokenHeart from "./components/BrokenHeart";
import Btn from "./components/Btn";
import DataInput from "./components/DataInput";
import ErrorView from "./components/ErrorView";
import Results from "./components/Results";
import classes from "./home.module.scss";

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [secName, setSecName] = useState("");
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(false);
  const [badMatch, setBadmatch] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [someWentWrong, setSomeWentWrong] = useState(false);

  const getData = (firstName, secName) => {
    setLoading(true);
    let url = `https://love-calculator.p.rapidapi.com/getPercentage?sname=${firstName}&fname=${secName}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "acb36fcefbmsh5acf7c0d8e93611p10360ajsn46d8510f52de",
        "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
      },
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        setResults(response);
        if (response.percentage === "0") {
          setBadmatch(true);
        } else {
          setShowResults(true);
        }
        console.log(results, 88);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setSomeWentWrong(true);
        setLoading(false);
      });
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handlesecName = (e) => {
    setSecName(e.target.value);
  };

  const handleCheck = () => {
    if (firstName.length >= 2 && secName.length >= 2) {
      getData(firstName, secName);
      setCheck(true);
    }
  };

  const handleAnother = () => {
    setCheck(false);
    setBadmatch(false);
    setShowResults(false);
  };

  const { percentage, fname, sname, result } = results;

  return (
    <div className={classes["container"]}>
      {!check && (
        <DataInput
          handleFirstName={handleFirstName}
          handlesecName={handlesecName}
          handleCheck={handleCheck}
        />
      )}
      {!check && <p className={classes["msg"]}>check if you are a match</p>}
      {loading && <Loading />}

      {badMatch && <p className={classes["msg"]}>sorry,it's a bad idea , just ran away  from this person</p>}

      {showResults && (
        <Results
          firstName={fname}
          secondName={sname}
          progress={percentage}
          message={result}
          innerHeartMsg={` cobatability : ${percentage} %`}
        />
      )}

      {showResults && <Btn btnTxt={`check  another`} onClick={handleAnother} />}
      {badMatch && <Btn btnTxt={`check  another`} onClick={handleAnother} />}

      {someWentWrong && <ErrorView onClick={handleAnother} />}
    </div>
  );
}
