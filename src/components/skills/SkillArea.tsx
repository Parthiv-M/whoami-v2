import { useState } from "react";
import "./skills.css";
import Circle from "./Circle";
import { skillData } from "src/utils/constants";

const SkillArea = () => {
    const [selectedSkill, setSelectedSkill] = useState<any>(skillData[0]);
    return (
        <div className="skill-wrapper">
            <h4>SKILLS {selectedSkill.type !== "home" && "/"} <span>{selectedSkill.type !== "home" && selectedSkill.name}</span></h4>
            <p>
                {selectedSkill.description}
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