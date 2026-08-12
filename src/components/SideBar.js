import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
    
    const toShowMenu = useSelector(store => store.app.toShowMenu);

    if(!toShowMenu) return null;

    return(
        <div className=" w-45 shadow-lg my-1 cursor-pointer">
            <ul className="border-b-2 border-gray-200">
                <Link to="/"><li className="my-1 p-2 hover:bg-gray-200">🏠︎ Home</li></Link>
                <li className="my-1 p-2 hover:bg-gray-200">▶ Shorts</li>
                <li className="my-1 p-2 hover:bg-gray-200">🔔 Subscriptions</li>
                <li className="my-1 p-2 hover:bg-gray-200">👤 You</li>
                <li className="my-1 p-2 hover:bg-gray-200">🕒 History</li>
            </ul>
            <h1 className="font-bold my-2">Explore</h1>
            <ul className="border-b-2 border-gray-200">
                <li className="my-1 p-2 hover:bg-gray-200">Shopping</li>
                <li className="my-1 p-2 hover:bg-gray-200">Music</li>
                <li className="my-1 p-2 hover:bg-gray-200">Movies</li>
                <li className="my-1 p-2 hover:bg-gray-200">Sports</li>
                <li className="my-1 p-2 hover:bg-gray-200">Games</li>
            </ul>
            <h1 className="font-bold my-2">More From YouTube</h1>
            <ul className="mb-2 border-b-2 border-gray-200">
                <li className="my-1 p-2 hover:bg-gray-200">YouTube Music</li>
                <li className="my-1 p-2 hover:bg-gray-200">YouTube Premium</li>
                <li className="my-1 p-2 hover:bg-gray-200">YouTube Kids</li>
            </ul>
        </div>
    )
}

export default SideBar;