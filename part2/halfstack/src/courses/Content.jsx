import Part from "./Part"

const Content = ({course}) => {
    return (
        <>
            {course.parts.map(currentCourse => 
                <Part key={currentCourse.id} currentCourse={currentCourse} />
            )}
        </>
    )
}

export default Content