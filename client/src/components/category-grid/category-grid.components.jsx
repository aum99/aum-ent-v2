import { GridContainer } from "./category-grid.styles";

import GridItem from "../grid-item/grid-item.component";

const categories = [
  {
    id: 1,
    title: "Nuts",
    imageurl:
      "https://res.cloudinary.com/damon753y/image/upload/v1689181319/IMG_4856_lxks6e.png",
    route: "products/nuts",
  },
  {
    id: 2,
    title: "Elbows",
    imageurl:
      "https://res.cloudinary.com/damon753y/image/upload/v1689181328/IMG_4869_ybkgsu.png",
    route: "products/elbows",
  },
  {
    id: 3,
    title: "Oil Distributors",
    imageurl:
      "https://res.cloudinary.com/damon753y/image/upload/v1689181328/IMG_4878_hsqxv5.png",
    route: "products/oil%20distributors",
  },
  {
    id: 4,
    title: "Plugs",
    imageurl:
      "https://res.cloudinary.com/damon753y/image/upload/v1689181345/IMG_4882_axr8hu.png",
    route: "products/plugs",
  },
  {
    id: 5,
    title: "Shaft Sleeves",
    imageurl:
      "https://res.cloudinary.com/damon753y/image/upload/v1689181337/IMG_4889_mwk6px.png",
    route: "products/shaft%20sleeve",
  },
  {
    id: 6,
    title: "Studs",
    imageurl:
      "https://res.cloudinary.com/damon753y/image/upload/v1689181328/IMG_4868_jvwsm5.png",
    route: "products/studs",
  },
];

const CategoryGrid = () => {
  return (
    <GridContainer>
      {categories.map((category) => (
        <GridItem key={category.id} id={category.id} category={category} />
      ))}
    </GridContainer>
  );
};

export default CategoryGrid;
