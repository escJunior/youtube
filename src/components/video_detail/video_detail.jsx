import React from 'react';
import styles from './video_detail.module.css';

const Video_Detail = ({ video, video: { snippet } }) => (
  <section className={styles.detail}>
    <iframe
      className={styles.video}
      type='text/html'
      title='youtube video player'
      width='100%'
      height='500px'
      src={`https://www.youtube.com/embed/${video.id}`}
      frameBorder='0'
      allowFullScreen
    ></iframe>
    <h2>{snippet.title}</h2>
    <h3>{snippet.chnnelTitle}</h3>
    <pre className={styles.description}>{snippet.description}</pre>
  </section>
);

export default Video_Detail;
