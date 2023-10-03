import "./notfound.css"
import { Link } from "react-router-dom"
const NotFound = () => {
    return (
        <>
            <div className="container notfound_container">
                <Link className="btn" to="/">Page Not Found. Go Back Home</Link>
            </div>
        </>
    )
}

export default NotFound