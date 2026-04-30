import { CDN_IMG_URL } from "./utils/constants";

const MovieCard = ({path}) => {
    return (
        <div className="w-46 pr-2">
            <img alt="movie-logo" src={CDN_IMG_URL + path} />
        </div>
    )
}

export default MovieCard;