import React from "react";

const SpotifyTracks: React.FC = () => {
  return (
    <div>
      <iframe
        src="https://open.spotify.com/embed/artist/21aY9wmD5johzL7saJNxCC?utm_source=generator&theme=0"
        width="100%"
        height="380"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpotifyTracks;
