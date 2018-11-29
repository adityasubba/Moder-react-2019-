import axios from 'axios';

const KEY = 'AIzaSyD7AR2w6H8ww4dxSjuJYccKaFhDUgFMShU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
