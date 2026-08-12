import { useDispatch,useSelector } from "react-redux";
import { toToggleMenu } from "./utils/appSlice";
import { useState, useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "./utils/constants";
import { addCacheData } from "./utils/searchSlice";
import { YOUTUBE_ICON } from "./utils/constants";
import { MORE_ICON_URL } from "./utils/constants";
import { USER_ICON_URL } from "./utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuerry, setSearchQuerry] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions,setShowSuggestions] = useState(false);
  const cacheData = useSelector(store =>store.search);

  useEffect(() => {
      const timer = setTimeout(() =>{
          if(cacheData[searchQuerry])
            return setSuggestions(cacheData[searchQuerry]); 
        else {
          showSearchSuggestions()
        }
      }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuerry]);

  const showSearchSuggestions = async () => {
    //console.log("API Call- " + searchQuerry);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuerry);
    const json = await data.json();
    //console.log(json[1]);
    setSuggestions(json[1]);
    dispatch(addCacheData(
      {[searchQuerry] : json[1]}
    ))
  };

  const toggleHandler = () => {
    dispatch(toToggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 my-2 shadow-lg">
      <div className="col-span-1 flex cursor-pointer mt-2">
        <img
          onClick={() => toggleHandler()}
          className="h-6 cursor-pointer"
          alt="more"
          src={MORE_ICON_URL}
        />
        <img
          className="w-28 h-7 mx-2"
          alt="app-logo"
          src={YOUTUBE_ICON}
        />
      </div>
      <div className="col-span-10">
        <div>
          <input
            className="border border-gray-400 w-[55%] p-2 rounded-l-full ml-15"
            type="text"
            placeholder="Search"
            value={searchQuerry}
            onChange={(e) => setSearchQuerry(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 w-[8%] p-2 rounded-r-full bg-gray-50 hover:bg-neutral-100 cursor-pointer">
            🔍︎
          </button>
        </div>
        
        {searchQuerry.length > 0 && showSuggestions && (<div className="absolute w-148 ml-15 bg-white rounded-xl mt-1 border border-gray-100">
          <ul>
            {suggestions.map((s) => (
              <li key={s} className="m-1 py-2 px-1 hover:bg-gray-100 rounded-xl shadow-sm">
                🔍︎ {s}
              </li>
            ))}
          </ul>
        </div>)}
      </div>
      <div className="col-span-1">
        <div className="border border-gray-300 flex ml-auto w-28 pr-2 rounded-full py-0.5 cursor-pointer hover:bg-gray-100">
          <img
            className="h-8 mx-2 mt-1 ml-auto"
            alt="usericon"
            src={USER_ICON_URL}
          />
          <div className="pt-1">Sign In</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
