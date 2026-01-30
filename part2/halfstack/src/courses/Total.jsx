const Total = ({course}) => {
    return (
        <b>total of {course.parts.reduce((s, p) => s + p.exercises, 0)} exercises</b>
    )
}

export default Total