import axios from "axios";
import { useState } from "react"
import Repos from "./components/Repos";
import { Route, Routes } from "react-router-dom";
import RepoDetails from "./components/RepoDetails";

function App() {
  const [gitdata, setGitdata] = useState([]);
  const [sort, setSort] = useState<string>('');
  const [searchValue, setSearchValue] = useState<string>('');

  const fetchData = async () => {
    const { data } = await axios.post(`http://localhost:3000/get-details`, {
      username: searchValue
    });
    setGitdata(data);
  }

  return (
    <div className="app-wrapper">
      <div className="search-sort">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter Username/Location/Email"
            className="input-field"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className="button" onClick={fetchData}>Search</button>
        </div>

        <div className="sort-bar">
          <select
            name="sort"
            value={sort}
            id=""
            className="input-field"
            onChange={(e) => {
              e.preventDefault();
              setSort(e.target.value)
            }}
          >
            <option value="" >Select One</option>
            <option value="followers">Followers</option>
            <option value="following">Following</option>
            <option value="public_repos">Public Repos</option>
            <option value="public_gists">Public Gists</option>
            <option value="created_at">Created At</option>
          </select>
          <button className="button">Apply</button>
        </div>
      </div>
      {
        gitdata?.length !== 0 && <Repos gitdata={gitdata} />
      }
      
      <Routes>
        <Route path="/repo-details" element={<RepoDetails />} />
      </Routes>

    </div>
  )
}

export default App
