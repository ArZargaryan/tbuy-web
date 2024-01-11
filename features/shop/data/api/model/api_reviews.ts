import { Review } from "@libs/domain/model/review";

interface ProductReviewsProps {
  totalItems: number;
  data: Review[];
}

export class ApiProductReviews {
  totalItems: number;
  data: Review[];
  constructor(props: ProductReviewsProps) {
    this.totalItems = props?.totalItems || 0;
    this.data = props?.data || [];
  }
}
