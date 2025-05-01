import React from "react";

function Banner() {
  return (
    <div
      className="h-[22vh] md:h-[70vh] bg-cover flex items-end"
      style={{
        backgroundImage: `url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhoSyuZX1_Ws_iesA7oBUYJwzp-0xre-DIZS_m1Bd_-aVhuEzDJ6w2Ei0HLzYHeQBBxxdoqvzhIKUNI34bUFd9s9s9N8CrWhTTJZfMSQKfq8A6yredFhFH1zRa50xKV6uQxxRz5jhqEsrWy/s1600/The+Avengers+International+Movie+Banners+-+Hulk,+Hawkeye,+Maria+Hill,+Iron+Man,+Nick+Fury,+Captain+America,+Black+Widow+&+Thor.jpg)`,
      }}
    >
      <div className="text-white w-full bg-yellow-900/60">Avengers</div>
    </div>
  );
}

export default Banner;
//This is test
