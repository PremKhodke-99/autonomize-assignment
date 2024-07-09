import { useLocation } from "react-router-dom"

const RepoDetails = () => {

    const location = useLocation();
    const { item } = location.state;

    return (
        <div className="details">
            <h1>{item.name}</h1>
            <p>{item.description}</p>
        </div>
    )
}

export default RepoDetails