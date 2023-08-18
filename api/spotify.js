require('dotenv').config();

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
const CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET;

async function getAccessToken() {
  // API ACCESS TOKEN
  const authParameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
  };

  const response = await fetch('https://accounts.spotify.com/api/token', authParameters);
  const data = await response.json();
  const accessToken = data.access_token;

  return accessToken;
}

export async function searchSpotify(query) {
  try {
    const accessToken = await getAccessToken();

    const searchParameters = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    };

    const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track,album,artist`, searchParameters);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error searching Spotify:', error);
    throw new Error('Internal Server Error');
  }
}

export async function getSong(songId) {
  try {
    const accessToken = await getAccessToken();

    const songParameters = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    };

    const response = await fetch(`https://api.spotify.com/v1/tracks/${songId}`, songParameters);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching Spotify song:', error);
    throw new Error('Internal Server Error');
  }
}