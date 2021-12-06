import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { useSelector } from 'react-redux';

import './VideoPlayComponent.css';

function VideoPlayComponent() {
  const [YoutubeVideo, setYoutubeVideo] = useState('');
  const [Data, setData] = useState();
  const selector = useSelector((state) => state.user.selectedMovi);

  const res = async function () {
    await selector;
    setData(selector);
  };

  useEffect(() => {
    res();
    movieTrailer(selector[0].title)
      .then((res) => {
        const data = new URLSearchParams(new URL(res).search);
        const param = data.get('v');
        setYoutubeVideo(param);
      })
      .catch((err) => console.log(err));
  }, [selector[0].title]);

  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      <YouTube className="yt__Video_iFrame_Div" videoId={YoutubeVideo} opts={opts} />
    </div>
  );
}

export default VideoPlayComponent;
