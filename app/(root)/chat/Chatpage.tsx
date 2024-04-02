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
  <div className="h-[700px]">       <MultiChatSocket {...chatProps} />
  <MultiChatWindow  {...chatProps} style={{ height: '100vh' }} /></div>
 
  );
};

export default ChatsPage;
