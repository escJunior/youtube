import React from 'react';
import Videoitem from '../video_item/video_item';
import styles from './video_list.module.css';

const Videolist = (props) => (
  <ul className={styles.videos}>
    {props.videos.map((video) => (
      <Videoitem key={video.id} video={video} />
    ))}
  </ul>
);

export default Videolist;
