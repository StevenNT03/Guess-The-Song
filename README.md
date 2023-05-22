
# Guess-The-Song
This is an interactive game where you have to guess the title of a random song provided by Spotify.

## Getting Started
To play the game, you'll need to have the following prerequisites:

  *Node.js installed on your machine
  
  *Spotify Developer Account and API credential
  
  # Installation
1. Clone the repository:

```
> git clone https://github.com/your-username/guess-the-song.git
```
2. Navigate to the project directory:
 
```
> cd guess-the-song
```

3. Install the dependencies:

```
> npm i
```

### Configuration
1. Create a new Spotify Developer Application and obtain the API credentials (client ID and client secret).


2. Start the game server:

```
> npm start 
```
3. Open your web browser and visit http://localhost:3000 to access the game.

## How to Play

-the "menu" part of the game will start after the login and you will have the possibilities to chose a genre.

-The game will display a random song fetched from Spotify based on the genre that you have chosen.

-You will have 60 seconds for guess the song.

-Try to guess the title of the song based on the provided audio preview.

-If you want you can use the ? button for an help but this will cost seconds.

-Enter your guess in the input field and click the "Submit" button.

-The game will show whether your guess is correct or incorrect.

-Repeat the process to guess more songs and improve.


# Exposed API
This game exposes a RESTful API that interacts with the Spotify API to fetch random songs and provide song information to the game interface. The API has the following endpoint:

GET /Song/:token/:genre

This endpoint retrieves a random song based on the specified genre and the user's Spotify access token. It returns the following information about the song:

*trackTitle: The title of the song.

*albumCoverUrl: The URL of the album cover image.

*artistImage: The URL of the artist's profile image.

*artistName: The name of the artist.


*To use this endpoint, make a GET request to /Song/:token/:genre, where :token is the user's Spotify access token and :genre is the desired genre for the random song.

# Example
-request
   
   GET /Song/your-access-token/rock

-response 


```
{
"trackTitle": "Some Song",
"albumCoverUrl": "https://example.com/album-cover.jpg",
"artistImage": "https://example.com/artist-profile.jpg",
"artistName": "Some Artist"
}
```
Please note that the access token must be a valid and authorized Spotify access token with the necessary scopes to retrieve song information.

# Contributing

Contributions to improve the game are welcome! Here are a few ways you can contribute:

*Add new features or game mechanics

*Improve the user interface and experience

*Fix bugs and issues

*Please create a pull request with your proposed changes, and they will be reviewed for inclusion.

# Conclusion

The exposed API allows the game to retrieve random songs from Spotify and provide the necessary information for the gameplay. By leveraging the Spotify API, the game offers -an interactive and enjoyable experience for users to test their song knowledge.

Feel free to explore and utilize this API for other projects or extend its functionality as per your requirements.

Happy gaming and enjoy guessing the songs!

