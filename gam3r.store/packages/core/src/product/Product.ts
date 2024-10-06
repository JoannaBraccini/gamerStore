import Priceable from "./Priceable";
import Specifications from "./Specifications";

export default interface Product extends Priceable {
  id: number;
  name: string;
  description: string;
  brand: string;
  model: string;
  image: string;
  videoReview: string;
  rating: number;
  tags: string[];
  specs: Specifications;
}
