import React from "react";

//Components imported
import Intro from "../components/Intro.jsx";
import PersonalData from "../components/PersonalData.jsx";
import Education from "../components/Education.jsx";
import WorkExperience from "../components/WorkExperience.jsx";
import Skills from "../components/Skills.jsx";

function Home() {
    return (
        <>
            <Intro />
            <PersonalData />
            <Education />
            <WorkExperience />
            <Skills />
        </>
    );
}

export default Home;
