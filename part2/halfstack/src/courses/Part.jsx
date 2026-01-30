const Part = ({currentCourse}) => {
    return (
        <p>
            {currentCourse.name} {currentCourse.exercises}
        </p>
    )
}

export default Part