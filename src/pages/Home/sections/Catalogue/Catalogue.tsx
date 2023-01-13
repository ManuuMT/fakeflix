import { Category } from "../../components/Category";
import "./styles/Catalogue.scss";

export interface CatalogueInterface {}

const Catalogue: React.FC<CatalogueInterface> = () => {
  return (
    <div className="catalogue">
      <Category />
    </div>
  );
};

export default Catalogue;
