import { useState, useEffect } from "react";
import "./happymessages.css"
import { Hearts } from "./Hearts";
import { HowLongAgo } from "./HowLongAgo";
import { TextField } from "./TextField";

export const HappyMessages = () => {

    const [thoughts, setThoughts] = useState([]);

    const fetchThought = () => {
        fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
            .then(res => res.json())
            .then(json => setThoughts(json))
    };

    useEffect(() => {
       fetchThought()
    }, []);

    return (
        <div>
            <div>
                <TextField />
            </div>
            <ul>
                {thoughts.map(thought => (
                    <li key={thought._id} className="listOfThoughts">{thought.message}
                        <p className="hearts">
                            <Hearts thought={thought.hearts} />
                            <HowLongAgo />
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
