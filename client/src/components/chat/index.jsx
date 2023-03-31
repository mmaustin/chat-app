import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from "react-chat-engine-advanced";
import Header from '@/components/customHeader';
import StandardMessageForm from '@/components/customMessageForms/StandardMessageForm';
import Ai from "@/components/customMessageForms/Ai";
import AiCode from "@/components/customMessageForms/AiCode";
import AiAssist from "@/components/customMessageForms/AiAssist";


const Chat = () => {
  //chatProps is an object with tons of values, passed down to components below
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    "rooster",
    "rooster"
  )
   
  return (
    <div style={{flexBasis: "100%"}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow
          {...chatProps}
          style={{height: "100vh"}}
          renderChatHeader={(chat) => <Header chat={chat}/>}
          renderMessageForm={(props) => {
            if(chatProps.chat?.title.startsWith('AiChat_')){
              return <Ai props={props} activeChat={chatProps.chat} />
            }
            if(chatProps.chat?.title.startsWith('AiCode_')){
              return <AiCode props={props} activeChat={chatProps.chat} />
            }
            if(chatProps.chat?.title.startsWith('AiAssist_')){
              return <AiAssist props={props} activeChat={chatProps.chat} />
            }
            return (
              <StandardMessageForm props={props} activeChat={chatProps.chat} />
            )
          }}
        />
    </div>
  )
}
export default Chat