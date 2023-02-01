import { GENRES } from "../../../../services/getGenre";
import { Category } from "../../components/Category";
import "./Catalogue.scss";

const Catalogue: React.FC = () => {
  const genresArr = [
    GENRES.Comedy,
    GENRES.Drama,
    GENRES.Action,
    GENRES.Documentary,
    GENRES.WarPolitics,
    GENRES.Family,
  ];
  return (
    <div className="catalogue">
      <div className="catalogue-main">
        {genresArr.map((genre) => (
          <Category genre={genre} />
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
