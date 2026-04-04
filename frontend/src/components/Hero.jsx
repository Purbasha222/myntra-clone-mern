import heroVideo from "../assets/heroVideo.mp4";

const Hero = () => {
  return (
    <div className="mt-15 w-full h-100 overflow-hidden">
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        className="w-full h-100 object-fit"
      />
    </div>
  );
};

export default Hero;
