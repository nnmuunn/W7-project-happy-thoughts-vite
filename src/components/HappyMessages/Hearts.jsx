import { useState, useEffect } from "react";

export const Hearts = () => {
    
    const [countHearts, setCountHearts] = useState(0);

    useEffect(() => {

    }, [countHearts])


  return (
    <div>
        <button onClick={() => setCountHearts(countHearts + 1)} className="theHeart">&#128420;</button>
        <p>x{countHearts}</p>
    </div>
  )
}
