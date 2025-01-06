import React, { useState } from "react";
import { data } from "./Data";
import "./quizstyle.css";

const QuizApp = () => {
    const [index, setIndex] = useState(0);
    const [option, setOption] = useState("");
    const [finish, setFinish] = useState(false);
    const [score, setScore] = useState(0);
    const correctAnswers = [
        "Option1",
        "Option1",
        "Option1",
        "Option1",
        "Option1",
        "Option1",
        "Option1",
        "Option1",
    ];
    const handleNext = () => {
        if (index < data.length - 1) {
            if (correctAnswers[index] === option) {
                setScore(score + 1);
            }
            setIndex(index + 1);
            setOption(null);
        } else {
            if (correctAnswers[index] === option) {
                setScore(score + 1);
            }
            setFinish(true);
        }
    };
    if (finish) {
        return (
            <div className="scorePage">
                <h1>Quiz Finished</h1>
                <h3>
                    your score is {score} out of {data.length}
                </h3>
            </div>
        );
    }
    const handleSelect = (optn) => {
        setOption(optn);
    };
    return (
        <div className="quiz">
            <h2>{data[index].Question}</h2>
            <ul>
                <li
                    className={option === "Option1" ? "selected" : ""}
                    onClick={() => handleSelect("Option1")}
                >
                    {data[index].Option1}
                </li>
                <li
                    className={option === "Option2" ? "selected" : ""}
                    onClick={() => handleSelect("Option2")}
                >
                    {data[index].Option2}
                </li>
                <li
                    className={option === "Option3" ? "selected" : ""}
                    onClick={() => handleSelect("Option3")}
                >
                    {data[index].Option3}
                </li>
                <li
                    className={option === "Option4" ? "selected" : ""}
                    onClick={() => handleSelect("Option4")}
                >
                    {data[index].Option4}
                </li>
            </ul>
            <button disabled={!option} onClick={handleNext}>
                Next
            </button>
            <h5>
                Question {index + 1} of {data.length}
            </h5>
        </div>
    );
};

export default QuizApp;
