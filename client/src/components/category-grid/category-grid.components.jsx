import { GridContainer } from "./category-grid.styles";

import GridItem from "../grid-item/grid-item.component";

const categories = [
  {
    id: 1,
    title: "Bolts & Nuts",
    imageurl:
      "https://www.stockinitaly.com/wp-content/uploads/2019/03/bigstock-bolts-nuts-screws-54640064-e1446090357363.jpg",
    route: "products/bolts-nuts",
  },
  {
    id: 2,
    title: "Cnc Equipment",
    imageurl:
      "https://geomiq.com/wp-content/uploads/2021/03/Untitled-design-10-scaled.jpg",
    route: "products/cnc-equipment",
  },
  {
    id: 3,
    title: "Gauges",
    imageurl:
      "https://media.istockphoto.com/id/525501302/photo/row-of-industrial-high-pressure-gas-gauge-meters.jpg?s=612x612&w=0&k=20&c=7hGMHhsVxf7r8n7lHHh8aINJlb8dmDyOGrR9b7R8rn0=",
    route: "products/gauges",
  },
  {
    id: 4,
    title: "Pistons",
    imageurl:
      "https://www.bar-tek-tuning.com/cdn-cgi/image/fit=scale-down,quality=50,sharpen=1,format=auto,width=1920/https://www.bar-tek-tuning.com/media/17/a5/ae/1678805759/22-kolben-2000x800px.webp",
    route: "products/pistons",
  },
  {
    id: 5,
    title: "Precision Works",
    imageurl:
      "https://5.imimg.com/data5/GM/CQ/AS/ANDROID-5540148/product-jpeg-500x500.png",
    route: "products/precision-job-works",
  },
  {
    id: 6,
    title: "Valves",
    imageurl:
      "https://www.market-prospects.com//storage/images/675_1200x675.jpg",
    route: "products/valves",
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
