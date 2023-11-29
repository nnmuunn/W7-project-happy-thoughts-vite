import { useState, useEffect } from "react";
import "./happymessages.css"
import { Hearts } from "./Hearts";
import { HowLongAgo } from "./HowLongAgo";

export const HappyMessages = () => {

    const [thoughts, setThoughts] = useState([]);

    useEffect(() => {
        fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
            .then(res => res.json())
            .then(json => setThoughts(json));
    }, []);

    return (
        <div>
            <ul>
                {thoughts.map(thought => (
                    <li key={thought._id} className="listOfThoughts">{thought.message}
                    <p className="hearts"><Hearts /></p>
                    <p className="date">long ago <HowLongAgo /></p>
                    </li>  
                ))}
            </ul>
        </div>
    );
};
