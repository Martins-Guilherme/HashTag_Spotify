import logoSpotify from "../assets/logo/spotify-logo.png";

const Header = () => {
  return (
    <div className="header">
      <a href="/">
        <img src={logoSpotify} alt="Logomarca do Spotify" />
      </a>

      <a className="header__link" href="/">
        <h1>Spotify</h1>
      </a>
    </div>
  );
};

export default Header;
