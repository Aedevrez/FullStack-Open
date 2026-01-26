import StatisticLine from "./StatisticLine"

const Statistics = (props) => {
    const [good, neutral, bad, total, score] = props.data
    if (total == 0) {
        return (
            <p>No feedback given</p>
        )
    }
    return (
        <>
            <h1>statistics</h1>
            <table>
                <tbody>
                    <StatisticLine text="good" value={good} />
                    <StatisticLine text="neutral" value={neutral} />
                    <StatisticLine text="bad" value={bad} />
                    <StatisticLine text="all" value={total} />
                    <StatisticLine text="average" value={score / total} />
                    <StatisticLine text="positive" value={(good * 100 / total) + "%"} />
                </tbody>
            </table>
        </>
    )
}

export default Statistics;