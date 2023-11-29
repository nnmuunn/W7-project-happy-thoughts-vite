import { useState, useEffect } from "react"

export const HowLongAgo = (props) => {
  const [boutYourTime, setBoutYourTime] = useState()

  useEffect(() => {
    fetch(props.url)
    .then(res => res.json())
    .then(json => {
      console.log(json);
      setBoutYourTime(json)
    })
  })
  return (
    <div>
      <p className="time"></p>
    </div>
  )
}
