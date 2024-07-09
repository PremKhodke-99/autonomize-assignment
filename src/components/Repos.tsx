import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const Repos = ({ gitdata }: any) => {

    const [repos, setRepos] = useState([]);
    const navigate = useNavigate();
    // console.log(gitdata?.repos_url);

    const getRepos = async () => {
        const { data } = await axios.get(gitdata?.repos_url);
        setRepos(data);
    }

    useEffect(() => {
        getRepos();
    }, [])

    console.log(repos);

    return (
        <div className="grid-wrapper">
            {
                repos?.length && repos.map((item: any) => (
                    <div className="card">
                        <h3>{item.name}</h3>
                        <p>{item?.description}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Repos