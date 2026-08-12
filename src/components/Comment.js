import { USER_ICON_URL } from "./utils/constants";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex my-2 p-2 bg-gray-200 rounded-lg">
      <div>
        <img className="w-12 h-12" alt="user" src={USER_ICON_URL} />
      </div>
      <div className="px-2">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;