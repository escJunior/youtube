import React, { useState, useEffect } from 'react';
import styles from './app.module.css';
import Search_header from './components/search_header/search_header';
import Videolist from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    console.log('useEffect');

    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCLBkyHzYHdu_gesJwj4eCQuviMB0P9t9I',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log('error', error));
  }, []);
  return (
    <div className={styles.app}>
      <Search_header />
      <Videolist videos={videos} />
    </div>
  );
}

export default App;
