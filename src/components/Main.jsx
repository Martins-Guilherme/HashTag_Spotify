import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <div className="main">
      <div className="item-list">
        <div className="item-list__header">
          <h2 className="a">Artistas populares</h2>
          <a href="/">Mostrar tudo</a>
        </div>
        <div className="item-list__container">
          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4"
                  alt="imagem do artista X"
                  className="single-item__image"
                />
              </div>
              <FontAwesomeIcon
                className="single-item__icon"
                icon={faCirclePlay}
              />
            </div>
            <div className="single-item__texts">
              <div className="single-item__2lines">
                <p className="single-item__title">Henrique & Juliano</p>
              </div>
              <p className="single-item__type">Artista</p>
            </div>
          </div>
          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4"
                  alt="imagem do artista X"
                  className="single-item__image"
                />
              </div>
              <FontAwesomeIcon
                className="single-item__icon"
                icon={faCirclePlay}
              />
            </div>
            <div className="single-item__texts">
              <div className="single-item__2lines">
                <p className="single-item__title">Henrique & Juliano</p>
              </div>
              <p className="single-item__type">Artista</p>
            </div>
          </div>
          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4"
                  alt="imagem do artista X"
                  className="single-item__image"
                />
              </div>
              <FontAwesomeIcon
                className="single-item__icon"
                icon={faCirclePlay}
              />
            </div>
            <div className="single-item__texts">
              <div className="single-item__2lines">
                <p className="single-item__title">Henrique & Juliano</p>
              </div>
              <p className="single-item__type">Artista</p>
            </div>
          </div>
          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4"
                  alt="imagem do artista X"
                  className="single-item__image"
                />
              </div>
              <FontAwesomeIcon
                className="single-item__icon"
                icon={faCirclePlay}
              />
            </div>
            <div className="single-item__texts">
              <div className="single-item__2lines">
                <p className="single-item__title">Henrique & Juliano</p>
              </div>
              <p className="single-item__type">Artista</p>
            </div>
          </div>
          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4"
                  alt="imagem do artista X"
                  className="single-item__image"
                />
              </div>
              <FontAwesomeIcon
                className="single-item__icon"
                icon={faCirclePlay}
              />
            </div>
            <div className="single-item__texts">
              <div className="single-item__2lines">
                <p className="single-item__title">Henrique & Juliano</p>
              </div>
              <p className="single-item__type">Artista</p>
            </div>
          </div>
          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4"
                  alt="imagem do artista X"
                  className="single-item__image"
                />
              </div>
              <FontAwesomeIcon
                className="single-item__icon"
                icon={faCirclePlay}
              />
            </div>
            <div className="single-item__texts">
              <div className="single-item__2lines">
                <p className="single-item__title">
                  Amo noite e dia - livre in são paulo / 2010
                </p>
              </div>
              <p className="single-item__type">Artista</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
