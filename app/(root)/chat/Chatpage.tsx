import { PrettyChatWindow } from "react-chat-engine-pretty";
import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";
const ChatsPage = (props: any) => {
  // const chatProps = useMultiChatLogic(
  //   "8e31bff0-d614-490e-a48a-7c649755ff83",
  //   "soufiane",
  //   "0603763373S"
  // );
  return (
  <div className="min-h-screen">   <PrettyChatWindow
  projectId="8e31bff0-d614-490e-a48a-7c649755ff83"
  username="soufiane"
  secret="0603763373S"
  style={{ height: '700px' }}
/></div>
 
  );
};

export default ChatsPage;
