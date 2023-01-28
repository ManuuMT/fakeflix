import { GENRES } from "../../../../services/getGenre";
import { Category } from "../../components/Category";
import "./Catalogue.scss";

export interface CatalogueInterface {}

const Catalogue: React.FC<CatalogueInterface> = () => {
  return (
    <div className="catalogue">
      <div className="catalogue-main">
        <Category genre={GENRES.Comedy} />
        {/* <Category genre={GENRES.Drama} />
        <Category genre={GENRES.Action} />
        <Category genre={GENRES.Documentary} /> */}
      </div>
    </div>
  );
};

export default Catalogue;
