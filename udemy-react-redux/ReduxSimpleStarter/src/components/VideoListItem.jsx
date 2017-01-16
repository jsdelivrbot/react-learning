import React from 'react';

const VideoListItem = ({ video }) => {
  const title = video.snippet.title;
  const imageUrl = video.snippet.thumbnails.medium.url;
  return (
    <li>
      <img src={imageUrl} />
      {title}
    </li>
  );
};

export default VideoListItem;
