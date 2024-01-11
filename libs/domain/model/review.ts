import { Rating } from "@libs/domain/model/rating";

interface ReviewModelProps {
  id: number;
  author: {
    id: number;
    name: string;
    image: string;
  };
  createdAt: string; // дата будет маппится в строку
  rating: Rating;
  title?: string;
  text: string;
  images: string[];
}

export class Review {
  id: number;
  author: {
    id: number;
    name: string;
    image: string;
  };
  createdAt: string; // дата будет маппится в строку
  rating: Rating;
  title?: string;
  text: string;
  images: string[];

  constructor(props: ReviewModelProps) {
    this.id = props.id;
    this.author = props.author;
    this.createdAt = props.createdAt;
    this.rating = props.rating;
    this.title = props.title;
    this.text = props.text;
    this.images = props.images;
  }
}
