const { default: axios } = require("axios");
const GitModel = require("../model/git.model");

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * Method is used to get details from API if not found in db
 */
const getDetails = async (req, res) => {
    const { username } = req.body;

    try {
        const dataAlreadyPresent = await GitModel.findOne({ login: username });

        if (dataAlreadyPresent) { //condition to check if data already present in db or not
            // console.log('in db');
            res.status(200).send(dataAlreadyPresent);
        }
        else { // if not present in db it will fire api request
            // console.log('in else');
            const response = await axios.get(`https://api.github.com/users/${username}`);
            const data = await response.data;

            var userdata = new GitModel(data);
            userdata.save();
            // console.log(userdata);
            res.status(200).send(data);
        }

    } catch (error) {
        console.log(error);
        res.send("error", error.message)
    }
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * Method used to find data in db based on search value 
 */
const findData = async (req, res) => {
    const { searchValue } = req.body;
    console.log(searchValue);
    try {
        const data = await GitModel.find({
            $or: [
                { login: searchValue },
                { location: searchValue },
                { email: searchValue },
                { name: searchValue },
            ]
        });

        if (data) {
            res.status(200).send(data);
        } else {
            res.status(301).send('No data found')
        }
    } catch (error) {
        console.log(error);
        res.send("error", error.message)
    }
}

/**
 * Method used to update data in db aceepting id as a param
 * @param {*} req 
 * @param {*} res 
 */
const updateData = async (req, res) => {
    const { id } = req.params;
    const { location, blog, bio } = req.body;
    try {
        let currentData = await GitModel.findByIdAndUpdate(id, {
            location,
            blog,
            bio
        });

        if (currentData) {
            res.status(200).send("ok updated");
        } else {
            res.send("not edited");
        }
    } catch (error) {
        console.log(error);
        res.send("error", error.message)
    }
}

/**
 * Method used to delete the data from the db
 * @param {*} req 
 * @param {*} res 
 */
const deleteData = async (req, res) => {
    const { username } = req.params;
    try {
        await GitModel.findOneAndDelete({ login: username });
        res.status(201).send("Deleted")
    } catch (error) {
        console.log(error);
        res.send("error", error.message)
    }
}

/**
 * Method used to sort data based on public_repos, public_gists, followers, following, created_at
 * @param {*} req 
 * @param {*} res 
 */
const sortData = async (req, res) => {
    const { sortBy } = req.body;
    let sortCriteria;
    if (sortBy === 'public_repos') {
        sortCriteria = {
            'public_repos': -1
        }
    }
    else if (sortBy === "public_gists") {
        sortCriteria = {
            'public_gists': -1
        }
    }
    else if (sortBy === "followers") {
        sortCriteria = {
            'followers': -1
        }
    }
    else if (sortBy === "following") {
        sortCriteria = {
            'following': -1
        }
    }
    else if (sortBy === "created_at") {
        sortCriteria = {
            'created_at': -1
        }
    }

    try {
        const sortedUser = await GitModel.find().sort(sortCriteria)
        // console.log(sortCriteria);
        res.status(200).send(sortedUser)
    } catch (error) {
        console.log(error);
        res.send("error", error.message)
    }
}

module.exports = {
    getDetails,
    findData,
    deleteData,
    updateData,
    sortData
}