const Form = ({sort, setSort, setSearchValue, fetchData} : any) => {

    return (
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
    )
}

export default Form