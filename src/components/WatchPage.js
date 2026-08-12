import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearMenu } from "./utils/appSlice";
import { useEffect } from "react";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const VideoId = searchParams.get("v");
  console.log(VideoId);
  const toShowVideosData = useSelector((store) => store?.app?.setVideosData);

  useEffect(() => {
    dispatch(clearMenu());
  }, []);

  return (
    <div className="m-2 px-2 rounded-xl w-full">
      <div className="flex">
        <div>
          <iframe
            width="1100"
            height="600"
            src={
              "https://www.youtube.com/embed/" + VideoId + "?&autoplay=1&rel=0"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <LiveChat />
        </div>
      </div>
      <div className="w-275">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
