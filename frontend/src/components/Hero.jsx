import heroVideo from "../assets/heroVideo.mp4";

const Hero = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Hero;
