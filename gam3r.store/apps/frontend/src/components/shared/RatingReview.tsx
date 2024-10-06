import {
  IconStar,
  IconStarFilled,
  IconStarHalfFilled,
} from "@tabler/icons-react";

export interface RatingReviewProps {
  rating: number;
  size?: number;
}

export default function RatingReview(props: RatingReviewProps) {
  function ratingToStars(rating: number) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<IconStarFilled size={props.size ?? 12} />);
      } else if (rating >= i - 0.5) {
        stars.push(<IconStarHalfFilled size={props.size ?? 12} />);
      } else {
        stars.push(<IconStar size={props.size ?? 12} />);
      }
    }
    return stars;
  }

  return (
    <div className="flex gap-0.5 text-emerald-400">
      {ratingToStars(props.rating)}
    </div>
  );
}
