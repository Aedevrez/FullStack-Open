import { useState } from "react";
import Statistics from "./Statistics"
import Button from "./Button"

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [total, setTotal] = useState(0)
    const [score, setScore] = useState(0)

    const incrementGood = () => {
        setGood(good + 1)
        setTotal(total + 1)
        setScore(score + 1)
    }
    const incrementNeutral = () => {
        setNeutral(neutral + 1)
        setTotal(total + 1)
    }
    const incrementBad = () => {
        setBad(bad + 1)
        setTotal(total + 1)
        setScore(score - 1)
    }

    return (
        <div>
            <h1>give feedback</h1>
            <Button onClick={incrementGood} text="good"/>
            <Button onClick={incrementNeutral} text="neutral"/>
            <Button onClick={incrementBad} text="bad"/>
            <Statistics data={[good, neutral, bad, total, score]} />
        </div>
    )
}

export default App;