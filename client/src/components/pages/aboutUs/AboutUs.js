import "../../layouts/layouts.scss";
import Logo from "../../../assets/images/logo.webp";
const AboutUs = () => {
  return (
    <>
      <div className="home-banner">
        <div className="banner-img"></div>
      </div>
      <div className="left-shadow"></div>
      <div className="right-shadow"></div>

      <div className="banner-content">
        <div className="card border-0 ">
          <div className="card-header border-0">
            <img src={Logo} alt="" className="w-50" />
          </div>
          <div className="card-body pt-1">
            <h1>About Us</h1>
          </div>
        </div>
      </div>
      <div className="row about-us">
        <div className="offset-lg-3 col-lg-6  about-us-container">
          <h1 className="d-flex align-items-center">
            <span className="material-symbols-outlined fs-1 me-3 ">
              neurology
            </span>
            About Us
          </h1>
          <h3 className="fw-bold">Our mission</h3>
          <div>
            <span className="about-typo">
              Welcome to NolanAi, the AI-driven scriptwriting software for
              screenwriters at any level. Our mission is to guide and empower
              you in crafting captivating screenplays while preserving your
              unique voice.
            </span>
          </div>
          <h3 className="fw-bold">What is NolanAI?</h3>
          <div>
            <span className="about-typo">
              NolanAi is the ultimate AI-driven script writing software that can
              help screenwriters of all levels. It's designed to guide and
              assist you in bringing your stories to the screenplay industry
              format, without stealing your creativity.
            </span>
          </div>
          <div>
            <span className="about-typo">
              If you're new to the industry, NolanAi can be your co-pilot,
              helping you through the emotional and exhausting process of
              screenwriting.
            </span>
          </div>
          <div>
            <span className="about-typo">
              With its powerful algorithms and intuitive interface, it can offer
              suggestions and guidance on character development, plot points,
              and dialogue, helping you turn your ideas into polished
              screenplays.
            </span>
          </div>
          <div>
            <span className="about-typo">
              For experienced scriptwriters, NolanAi can bring new ideas and
              inspiration to your writing. It can suggest fresh angles, plot
              twists, and character arcs, helping you take your craft to the
              next level. And throughout the writing process, you're always in
              control.
            </span>
          </div>
          <h4>NolanAi is here to help, not to take over.</h4>
          <h3 className="mb-3 mt-2 fw-bold">For Novice Screenwriters:</h3>
          <div>
            <span className="about-typo">
              If you're new to the industry, NolanAi is your trusted co-pilot on
              the exhilarating screenwriting journey. We understand the
              emotional and exhaustive nature of the process, which is why
              NolanAI is here to provide valuable suggestions and guidance. Our
              powerful algorithms and intuitive interface help you master
              character development, plot points, and dialogue while getting a
              grip on screenplay formatting.
            </span>
          </div>
          <h3 className="fw-bold">For Seasoned Scriptwriters:</h3>
          <div>
            <span className="about-typo">
              Even experienced scriptwriters need a creative spark. NolanAI acts
              as your catalyst, offering fresh ideas and innovative perspectives
              to elevate your writing. Discover new angles, plot twists, and
              character arcs that enhance your storytelling. NolanAI complements
              your expertise by working alongside you, amplifying your skills.
              Check out our advanced plans for professionals like you here:
              <a>Check premium plan</a>
            </span>
          </div>
          <h3 className="fw-bold">Control and Creativity:</h3>
          <div>
            <span className="about-typo">
              We believe in empowering screenwriters, not taking over. With
              NolanAi, you're always in control. Our AI-powered features
              seamlessly integrate into your workflow, providing intelligent
              suggestions and streamlining your creative process. Our
              user-friendly interface allows you to effortlessly shape and
              refine your scripts, bringing your stories to life efficiently and
              effectively.
            </span>
          </div>
          <div className="my-3 h4">
            Experience the transformative impact of NolanAi and unleash your
            screenwriting potential today.
          </div>
          <div className="my-3 h4">
            Drop us an email: <a>hello@nolanai.app</a>
          </div>

          <div className="my-3 h4">
            For support: <a>support@nolanai.app</a>
          </div>
        </div>
        <div className="">
          <button className="btn btn-danger d-block mx-auto">
            Try NolanAI
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
