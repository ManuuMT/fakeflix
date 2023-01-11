import React from "react";
import "./styles/Catalogue.scss";
export interface CatalogueInterface {}

const Catalogue: React.FC<CatalogueInterface> = () => {
  return <div className="catalogue">Catalogue</div>;
};

export default Catalogue;
