import videoBg from "../assets/videoBg.mp4";

type Props = {};

const BackgroundVideo = (props: Props) => {
  return (
    <video
      autoPlay
      muted
      loop
      className="absolute top-0 left-0 w-full h-full object-cover opacity-[0.22]"
      playsInline
    >
      <source src={videoBg} type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;
