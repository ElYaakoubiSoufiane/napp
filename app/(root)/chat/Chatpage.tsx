import { PrettyChatWindow } from "react-chat-engine-pretty";
import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";
const ChatsPage = (props: any) => {
  const chatProps = useMultiChatLogic(
    "8e31bff0-d614-490e-a48a-7c649755ff83",
    "soufiane",
    "0603763373S"
  );
  return (
    <div
      style={{ height: "500px", width: "700px" }}
      className="rounded-[20px] bg-white border-white border"
    >
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} />
    </div>
  );
};

export default ChatsPage;
