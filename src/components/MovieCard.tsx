import { IMG_CDN } from "../utils/constants";
interface Card {
  poster_path: string;
}
const MovieCard: React.FC<Card> = ({ poster_path }) => {
  return (
    <div className="w-36 md:w-44 pr-6 shadow-lg hover:scale-105 cursor-pointer">
      <img
        className="rounded-lg"
        src={IMG_CDN + poster_path}
        alt="Movie Card"
      />
    </div>
  );
};

export default MovieCard;
