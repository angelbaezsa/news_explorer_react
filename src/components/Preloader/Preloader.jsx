import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="circle-preloader-wrapper">
      <div className="circle-preloader"></div>
      <p className="preloader__text">Searching for news...</p>
    </div>
  );
};

export default Preloader;
