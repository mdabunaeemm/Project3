import Skills from "./skills";
import '../css/skills.css'
import { useState } from "react";

export default function SkillCont(){
    let [skill,setSkill]=useState({
        html:["HTMl",60],
        css:["CSS",70],
        js:["JavaScript",75],
        react:["React",90],
        node:["Node", 80]
    })


    const {html,css,js,react,node}=skill;
    return(
        <div className="skillCont">
            <Skills html={html} percentage={html[1]}/>
            <Skills html={css} percentage={css[1]}/>
            <Skills html={js} percentage={js[1]}/>
            <Skills html={react} percentage={react[1]}/>
            <Skills html={node} percentage={node[1]}/>
        </div>
    )
}