import "./Hero.css";
import heroVideo from "../../assets/videos/hero.mp4";

const Hero = () => {
  return (
    <section className="hero">
      
        <div className="overlay">
            <video
                className="hero-video"
                src={heroVideo}
                autoPlay
                muted
                loop
                playsInline
            />
        </div>
      
    </section>
  );
};

export default Hero;  