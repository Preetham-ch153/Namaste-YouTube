

const VideoCard = ({ info }) => {


    //console.log(info);
    if(!info) return null;

    const { snippet, statistics } = info;
    const { channelTitle,title, thumbnails } = snippet;

    return (
        <div className="w-80 h-full mb-2 m-2 p-2 shadow-lg hover:bg-gray-200 cursor-pointer rounded-lg">
            <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
            <ul>
                <li className="font-bold">{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount / 1000} Views</li>    
            </ul>
        </div>
    )
}

export default VideoCard;