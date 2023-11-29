require('dotenv').config()
const express = require("express");
const app = express();

const port = 3000;

const githubData = {
  "login": "EktaYadav",
  "id": 8373595,
  "node_id": "MDQ6VXNlcjgzNzM1OTU=",
  "avatar_url": "https://avatars.githubusercontent.com/u/8373595?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/EktaYadav",
  "html_url": "https://github.com/EktaYadav",
  "followers_url": "https://api.github.com/users/EktaYadav/followers",
  "following_url": "https://api.github.com/users/EktaYadav/following{/other_user}",
  "gists_url": "https://api.github.com/users/EktaYadav/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/EktaYadav/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/EktaYadav/subscriptions",
  "organizations_url": "https://api.github.com/users/EktaYadav/orgs",
  "repos_url": "https://api.github.com/users/EktaYadav/repos",
  "events_url": "https://api.github.com/users/EktaYadav/events{/privacy}",
  "received_events_url": "https://api.github.com/users/EktaYadav/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Ekta Yadav",
  "company": "@Pfizer",
  "blog": "",
  "location": "Pune",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 0,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2014-08-06T11:05:27Z",
  "updated_at": "2019-06-20T21:24:09Z"
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/linkedin", (req, res) => {
  res.send("ekta-yadav");
});

app.get("/login", (req, res) => {
  res.send("<h3>please login at ekta aur code</h3>");
});

app.get('/youtube', (req, res)=>{
    res.send("<h2>Express JS</h2>")
})
app.get('/github', (req, res)=>{
  res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
