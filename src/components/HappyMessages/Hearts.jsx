import { useState, useEffect } from "react";

export const Hearts = (thought) => {
  
  return (
    <div>
        <button>&#128420; {thought.hearts}</button>
    </div>
  )
}
