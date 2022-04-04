import React from "react";
import { capitalizeFirstLetter } from '../utils/helpers';
import codeQuiz from "../assets/images/codeQuiz.PNG";
import daySched from "../assets/images/dayScheduler.PNG";
import passGen from "../assets/images/passGen.PNG";

function Portfolio() {
    return (
        <section id="portfolio">
            <h1>Portfolio</h1>
            <div>
                <h2>Code Quiz</h2>
                <h4>Here is my app for Code Quiz, a timed quiz used to test your JavaScript knowledge!</h4>
                <a href="https://1086jjohnston.github.io/codeQuiz/" target="_blank">
                    <img className="flex-row" src={codeQuiz}/>
                </a>
                </div>
                <div>
                    <h2>Workday Planner</h2>
                    <h4>This is an app to help you schedule your workday better.</h4>
                <a href="https://1086jjohnston.github.io/workday-planner/" target="_blank">
                    <img className="flex-row" src={daySched}/>
                </a>
                </div>
                <div>
                    <h2>Password Generator</h2>
                    <h4>This app will generate a random password for you.</h4>
                <a href="https://1086jjohnston.github.io/Password-Generator/" target="_blank">
                    <img className="flex-row" src={passGen}/>
                </a>
                </div>
        </section>
    )
}


export default Portfolio;