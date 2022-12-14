import type { SetStateAction } from 'react';
import "./circle.css";

interface CircleProps {
    type: string,
    name: string,
    iconPath: string,
    selectedSkill: string,
    setSelectedSkill: React.Dispatch<SetStateAction<string>>
}

const Circle = (props: CircleProps) => {
    return (
        <div
            className="circle flex flex-col"
            style={{
                backgroundColor: `${props?.type === "home" ? "#117CFA" : "#252525"}`,
                border: `4px solid  ${(props?.name !== "") && (props?.name?.toLowerCase() === props?.selectedSkill?.toLowerCase()) ? "#117CFA" : "transparent"}`,
            }}
            onClick={() => props?.type === "skill" ? props?.setSelectedSkill(props?.name) : props?.setSelectedSkill("")}
        >
            <img src={props?.iconPath} height="20px"/>
            <p 
                style={{
                    color: `${(props?.name !== "") && (props?.name?.toLowerCase() === props?.selectedSkill?.toLowerCase()) ? "#117CFA" : ""}`
                }}
            >{props?.name}</p>
        </div>
    );
}

export default Circle;