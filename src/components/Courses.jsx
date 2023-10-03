import { BiCategory } from "react-icons/bi"
import SectionHead from "./SectionHead"
import { courses } from "../data"
import Card from "../UI/Card"

const Courses = () => {
    return (
        <section className="courses">
            <div className="container courses_container">
                <SectionHead icon={<BiCategory />} title="Courses"/>
            <div className="courses_wrapper">
                {
                    courses.map(({ id, icon, title, info, path }) => {
                        return (
                            <Card className="courses_course" key={id}>
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{info}</small>
                            </Card>
                        )
                    })
                }
            </div>
            </div>
        </section>
    )
}

export default Courses