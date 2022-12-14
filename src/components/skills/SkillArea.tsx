import { useState } from "react";
import "./skills.css";
import Circle from "./Circle";

const SkillArea = () => {

    // skill data
    const skillData: any[] = [
        {
            type: "home",
            name: "My Skills",
            iconPath: "/assets/icons/skills/home.svg",
            description: "",
        },
        {
            type: "skill",
            name: "C Language",
            iconPath: "/assets/icons/skills/c.svg",
            description: "",
        },
        {
            type: "skill",
            name: "JavaScript",
            iconPath: "/assets/icons/skills/js.svg",
            description: "",
        },
        {
            type: "skill",
            name: "Python",
            iconPath: "/assets/icons/skills/python.svg",
            description: "",
        },
        {
            type: "skill",
            name: "MongoDB and SQL",
            iconPath: "/assets/icons/skills/database.svg",
            description: "",
        },
        {
            type: "skill",
            name: "AWS",
            iconPath: "/assets/icons/skills/aws.svg",
            description: "",
        },
        {
            type: "skill",
            name: "Figma",
            iconPath: "/assets/icons/skills/figma.svg",
            description: "",
        }
    ];

    const [selectedSkill, setSelectedSkill] = useState<string>("");
    return (
        <div className="skill-wrapper">
            <h4>SKILLS {selectedSkill !== "" && "/"} <span>{selectedSkill}</span></h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in
            </p>
            <div className="circles-wrapper flex">
                {
                    skillData?.map((skill: any, index: number) => {
                        return (
                            <Circle
                                key={index}
                                type={skill.type}
                                name={skill.name}
                                iconPath={skill.iconPath}
                                selectedSkill={selectedSkill}
                                setSelectedSkill={setSelectedSkill}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default SkillArea;