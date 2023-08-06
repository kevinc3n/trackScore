"use client"
import React, { useState } from 'react';
import { Righteous } from '@next/font/google';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import SearchPanel from '../../components/search_panel.jsx';
import SwiperComponent from '../../components/swiperComponent.js';
import searchSpotify from '../../api/spotify.js';

const righteous = Righteous({
  subsets: ['latin'],
  weight: '400',
});

/* TODO: RETRIEVE UNIQUE ID'S */
/* TODO: ADD MODAL WHEN USER SELECTS A SEARCH TILE */

function SearchBar() {
  const [query, setQuery] = useState('');
  const [songs, setSongs] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);

  const handleInputChange = async (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);

    if (inputValue) {
      try {
        const searchResults = await searchSpotify(inputValue);
        console.log('START OF SEARCH RESULTS');

        if (searchResults.tracks?.items) {
          console.log('Songs:');
          const songData = searchResults.tracks.items.map((track) => ({
            name: track.name,
            imageUrl: track.album?.images[0]?.url,
          }));
          console.log(songData);
          setSongs(songData);
        }

        if (searchResults.albums?.items) {
          console.log('Albums:');
          const albumData = searchResults.albums.items.map((album) => ({
            name: album.name,
            imageUrl: album.images[0]?.url,
          }));
          console.log(albumData);
          setAlbums(albumData);
        }

        if (searchResults.artists?.items) {
          console.log('Artists:');
          const artistData = searchResults.artists.items.map((artist) => ({
            name: artist.name,
            imageUrl: artist.images[0]?.url,
          }));
          console.log(artistData);
          setArtists(artistData);
        }
      } catch (error) {
        console.error('Error searching Spotify:', error);
      }
    } else {
      console.log('No input provided');
      setSongs([]);
      setAlbums([]);
      setArtists([]);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        overflowY: 'auto',
      }}
    >
      <div>
        <Typography
          variant="h1"
          align="center"
          style={{ color: '#ff3652' }}
          className={righteous.className}
          paddingBottom={'30px'}
          paddingTop={'50px'}
        >
          Search
        </Typography>
      </div>
  
      <div style={{ position: 'relative', width: '60%', paddingBottom: '50px'}}>
        <SearchIcon
          style={{
            position: 'absolute',
            left: '10px',
            top: '25%',
            transform: 'translateY(-50%)',
            fill: '#ccc',
          }}
        />
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyUp={handleInputChange}
          placeholder="Search..."
          style={{
            width: '100%',
            fontSize: '18px',
            padding: '10px 35px 10px 35px',
            borderRadius: '10px',
            border: '1px solid rgb(18, 34, 51)',
            boxShadow: '10px 10px 0 0 rgb(18, 34, 51)',
            fontFamily: 'Poppins, sans-serif',
          }}
        />
      </div>
  
      {songs.length > 0 && (
        <SwiperComponent searchPanels={songs.map((song) => <SearchPanel key={song.name} imageUrl={song.imageUrl} tooltipText={song.name} />)} headingText="SONGS" />
      )}

      {albums.length > 0 && (
        <SwiperComponent searchPanels={albums.map((album) => <SearchPanel key={album.name} imageUrl={album.imageUrl} tooltipText={album.name} />)} headingText="ALBUMS" />
      )}

      {artists.length > 0 && (
        <SwiperComponent searchPanels={artists.map((artist) => <SearchPanel key={artist.name} imageUrl={artist.imageUrl} tooltipText={artist.name} />)} headingText="ARTISTS" />
      )}
    </div>
  );
}

export default SearchBar;