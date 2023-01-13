import type { SetStateAction } from 'react';
import "./circle.css";
import { skillData } from 'src/utils/constants';

interface CircleProps {
    type: string,
    name: string,
    iconPath: string,
    selectedSkill: any,
    setSelectedSkill: React.Dispatch<SetStateAction<string>>
}

const findAndSetSkill = (name:string) => {
    let skillToSet = skillData.filter(skill => skill.name === name)
    return skillToSet[0];
}

const Circle = (props: CircleProps) => {
    return (
        <div
            className="circle flex flex-col"
            style={{
                backgroundColor: `${props?.type === "home" ? "#117CFA" : "#252525"}`,
                border: `4px solid  ${(props?.name !== "") && (props?.name?.toLowerCase() === props?.selectedSkill?.name?.toLowerCase()) ? "#117CFA" : "transparent"}`,
            }}
            onClick={
                () => {
                    if(props?.type === "skill"){
                        let s = findAndSetSkill(props?.name);
                        props?.setSelectedSkill(s);
                    } else
                        props?.setSelectedSkill(skillData[0])
                }
            }
        >
            <img src={props?.iconPath} height="20px"/>
            <p 
                style={{
                    color: `${(props?.type !== "home") && (props?.name !== "") && (props?.name?.toLowerCase() === props?.selectedSkill?.name?.toLowerCase()) ? "#117CFA" : ""}`
                }}
            >{props?.name}</p>
        </div>
    );
}

export default Circle;