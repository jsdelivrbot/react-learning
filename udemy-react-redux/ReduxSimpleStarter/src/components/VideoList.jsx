import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = ({videos}) => {
  const listOfVideos = videos.map((video) => {
    return <VideoListItem video={video} />;
  });
  return (
    <div>
      <ul>
        {listOfVideos}
      </ul>
    </div>
  );
};

export default VideoList;
