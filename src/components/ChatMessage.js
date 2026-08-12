import { NEW_CHAT_USER_ICON } from "./utils/constants";

const ChatMessage = ({ name,message }) => {
  return (
    <div className="flex my-1 py-2 shadow-sm rounded-lg">
      <div>
        <img className="h-8" alt="user-icon" src={NEW_CHAT_USER_ICON} />
      </div>
      <span className="font-bold pr-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
