import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SingleItem = ({ id, name, image, artist, idPath }) => {
  return (
    <Link to={`${idPath}/${id}`} className="single-item">
      <div className="single-item__div-image-button">
        <div className="single-item__div-image">
          <img
            className="single-item__image"
            src={image}
            alt={`Imagem do artista ${name}`}
          />
        </div>

        <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} />
      </div>

      <div className="single-item__texts">
        <div className="single-item__2lines">
          <p className="single-item__title">{name}</p>
        </div>

        <p className="single-item__type">
          {artist ?? "Artista"}
          {/* Se tem o artista existe usa ele mesmo, se não tem usa a string. 
            nullish coalesense = Operador de coalescência nula
            É um operador lógico que retorna o seu operando do lado direito quando o seu operador do lado esquerdo é null ou undefined.
          */}
        </p>
      </div>
    </Link>
  );
};

export default SingleItem;
