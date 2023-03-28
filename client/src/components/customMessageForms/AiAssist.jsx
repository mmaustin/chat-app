import { usePostAiAssistMutation } from "@/state/api";
import { useState, useEffect } from "react";
import MessageFormUi from "./MessageFormUi";

const useDebounce = (value, delay) => {
    const [debouncedVAlue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay)

      return () => {
        clearTimeout(handler);
      }
    })
    
}

const AiAssist = ({props, activeChat}) => {

  const [message, setMessage] = useState('');
  const [attachment, setAttachment] = useState('');
  const [triggerAssist] = usePostAiAssistMutation();
 
  const handleChange = (e) => setMessage(e.target.value);

  const handleSubmit = async() =>{
      const date = new Date()
          .toISOString()
          .replace("T", " ")
          .replace("Z", `${Math.floor(Math.random() * 1000)}+00:00`);
      const at = attachment ? [{blob: attachment, file: attachment.name}] : [];
      const form = {
          attachments: at,
          created: date,
          sender_username: props.username,
          text: message,
          activeChatId: activeChat.id,
      }

      props.onSubmit(form);
      setMessage("");
      setAttachment("");
  };

  return (
    <MessageFormUi
        setAttachment={setAttachment}
        message={message}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
    />
  )

    const debouncedValue = useDebounce(message, 1000);

}
export default AiAssist;