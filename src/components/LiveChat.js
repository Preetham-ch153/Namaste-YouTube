import ChatMessage from "./ChatMessage";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChatMessages } from "./utils/chatSlice";
import { generateRandomName } from "./utils/helper";
import { generateRandomMessage } from "./utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addChatMessages({
          name: generateRandomName(),
          message: generateRandomMessage(),
        }),
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="ml-1 w-full h-150 border border-black rounded-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full m-1 p-1 border border-black rounded-sm"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addChatMessages({
              name: "Preetham",
              message: liveMessage,
            }),
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-75 px-2 py-1 border border-black rounded-sm"
          type="text"
          placeholder="Type a chat"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="p-1 ml-1 bg-green-200 rounded-lg cursor-pointer">
          Send ➤
        </button>
      </form>
    </>
  );
};

export default LiveChat;
