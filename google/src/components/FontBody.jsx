import wallpaper from "../assets/Images/Sky-and-Moon-Dark-Wallpaper-for-Desktop-and-Laptop.jpg";
import searchLabsIcon from "../assets/Images/Search labs.svg";
import googleAppIcon from "../assets/Images/google_apps.svg";

const FontBody = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-start min-h-screen pt-32 bg-cover bg-center"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <div className="absolute top-4 right-6 flex items-center space-x-6 text-white text-lg">
        <a
          href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
          className="cursor-pointer hover:underline"
        >
          Gmail
        </a>
        <a
          href="https://www.google.com/imghp?hl=en&tab=ri&ogbl"
          className="cursor-pointer hover:underline"
        >
          Images
        </a>

        <a
          href="https://labs.google.com/search?source=ntp"
          className="relative flex items-center justify-center rounded-full transition duration-300 ease-in-out before:absolute before:w-10 before:h-10 before:rounded-full before:bg-gray-200/20 before:scale-0 hover:before:scale-100 before:transition before:duration-300"
        >
          <img
            src={searchLabsIcon}
            alt="Search Labs Icon"
            className="w-6 h-6 filter invert brightness-0 transition duration-300 ease-in-out"
          />
        </a>

        <div className="relative flex items-center justify-center rounded-full transition duration-300 ease-in-out before:absolute before:w-10 before:h-10 before:rounded-full before:bg-gray-200/20 before:scale-0 hover:before:scale-100 before:transition before:duration-300">
          <img
            src={googleAppIcon}
            alt="Google Apps Icon"
            className="w-6 h-6 filter invert brightness-0 transition duration-300 ease-in-out"
          />
        </div>

        {/* User Icon with the letter "I" */}
        <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-violet-500 text-white font-bold transition duration-300 ease-in-out before:absolute before:w-10 before:h-10 before:rounded-full before:bg-gray-200/20 before:scale-0 hover:before:scale-100 before:transition before:duration-300">
          I
        </div>
      </div>

      <h1
        className="font-bold text-white"
        style={{ fontSize: "92px", width: "272px", textAlign: "center" }}
      >
        Google
      </h1>
    </div>
  );
};

export default FontBody;
