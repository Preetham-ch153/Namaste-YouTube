import { YOUTUBE_VIDEOS_API } from "./utils/constants";
import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { videosData } from "./utils/appSlice";
import { useDispatch } from "react-redux";

const VideoContainer = () => {
    const [ videos, setVideos ] = useState([]);
    const dispatch = useDispatch();

    useEffect(()=> {
        handleVideos();
    },[]);

    const handleVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        setVideos(json?.items);
        dispatch(videosData(json?.items));
    }
    return (
        <div className="flex flex-wrap">
            {videos.map((video) =><Link to={"watch?v=" + video.id}  key={video.id}><VideoCard info={video}/></Link>)}
        </div>
    )
}

export default VideoContainer;