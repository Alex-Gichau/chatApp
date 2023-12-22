const express = require("express"); //Backend server
const cors = require("cors"); //Calls the server from any location
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {

    try {
        const r = await axios.put(
            "https://api.chatengine.io/users/",
            {username : username, secret : username, first_name : username},
            {headers : {"private-key":"67d307fb-6d9a-452f-8e31-4e6312939f65"}}
        )
        return res.status(r.status).json(r.data)
    } catch (e) {
        return res.status(e.response.status).json(e.response.data)
    }
  const { username } = req.body;
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);