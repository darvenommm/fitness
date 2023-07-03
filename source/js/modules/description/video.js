export const addVideoHandlers = () => {
  const HAS_VIDEO_CLASS = 'description__video--has-video';

  const root = document.querySelector('.description__video');
  const button = root.querySelector('button');

  button.addEventListener('click', () => {
    root.replaceChildren();
    root.classList.add(HAS_VIDEO_CLASS);
    root.innerHTML = `
      <iframe
        width="364"
        height: "228"
        src="${button.dataset.src}"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer;
        autoplay;
        clipboard-write;
        encrypted-media;
        gyroscope;
        picture-in-picture;
        web-share"
        allowfullscreen
      ></iframe>
    `;
  }, {once: true});
};
