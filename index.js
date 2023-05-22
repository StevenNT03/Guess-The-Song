


const { application } = require('express');
const express = require('express');
const cors = require('cors');

const url = require('url');

const app = express();
app.set(express.static('public'));
app.set('view engine', 'hbs');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true }));

app.listen(3000, () => {
   
});
app.get('/', (req, res) => {
    res.render("index");
});

app.get('/home', (req, res) => {
  res.render("home");
});

app.get('/GameMode', (req,res) => {
  const token= req.query.token;
  res.render("GameMode", {token});
});
app.get('/SaraBanda', (req,res) => {
  const token= req.query.token;
  res.render("SaraBanda", {token});
});
app.get('/Song/:token/:genre', async (req, res) => {
  const { genre, token } = req.params;
  const headers = {
    'Authorization': "Bearer " + token
  };

  const spotifySearchAPIEndpoint = `https://api.spotify.com/v1/search?q=genre:"${genre}"&type=track&market=IT&limit=50`;

  try {
    const response = await fetch(spotifySearchAPIEndpoint, { headers });
    const data = await response.json();
    const tracks = data.tracks.items;
    const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
    const  name  = randomTrack.name;

    const albumImageUrl = randomTrack.album.images[0].url;
    const artistId = randomTrack.artists[0].id;
    const artistEndpoint = `https://api.spotify.com/v1/artists/${artistId}`;
    const artistResponse = await fetch(artistEndpoint, { headers });
    const artistData = await artistResponse.json();
    const artistImageUrl = artistData.images[0].url;
    const artistName = artistData.name;
    const previewUrl = randomTrack.preview_url;


    const songInfo = {
      name,
      albumImageUrl,
      artistImageUrl,
      artistName,
      previewUrl
    };

    res.json(songInfo);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});



app.get('/WinOrLose', (req,res) =>{
 
  res.render("WinOrLose");
});

