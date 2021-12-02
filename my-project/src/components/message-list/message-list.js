import React, { useCallback, useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useStyles } from "./message-list-styles";
import { Message } from "./message";
import { messagesSelector, sendMessage } from "../../store/messages";
import { conversationsSelector } from "../../store/conversations";

export const MessageList = () => {
  const [value, setValue] = useState("");
  const { roomId } = useParams();
  const navigate = useNavigate();
  const messages = useSelector(messagesSelector(roomId));
  const conversations = useSelector(conversationsSelector);
  const ref = useRef(null);
  const refWrapper = useRef(null);
  const styles = useStyles();

  const dispatch = useDispatch();

  const send = useCallback(
    (author = "User", botMessage) => {
      if (value || botMessage) {
        dispatch(sendMessage({ author, message: value || botMessage }, roomId));
        setValue("");
      }
    },
    [value, roomId, dispatch]
  );

  useEffect(() => {
    let timerId = null;
    const lastMessages = messages[messages.length - 1];
    if (messages.length && lastMessages.author !== "Bot") {
      timerId = setTimeout(() => {
        send("Bot", "Hello from bot");
      }, 500);
    }

    return () => clearInterval(timerId);
  }, [messages, roomId, send]);

  useEffect(() => {
    ref.current?.focus();
  });

  useEffect(() => {
    if (refWrapper.current) {
      refWrapper.current.scrollTo(0, refWrapper.current.scrollHeight);
    }
  }, [messages]);

  const pressInput = ({ code }) => {
    if (code === "Enter") {
      send();
    }
  };

  useEffect(() => {
    const isValidRoomId = conversations.includes(roomId);
    if (!isValidRoomId && roomId) {
      navigate("/chat");
    }
  }, [conversations, roomId, navigate]);

  return (
    <div className={styles.wrapper}>
      <div ref={refWrapper} className={styles.content}>
        {messages.map((message, id) => (
          <Message message={message} key={id} />
        ))}

        {/* <Button onClick={send}>send message</Button> */}
      </div>

      <div className={styles.input}>
        <Input
          fullWidth
          ref={ref}
          placeholder="send message..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={pressInput}
          endAdornment={
            <InputAdornment position="end">
              <Send className={styles.icon} onClick={send} />
            </InputAdornment>
          }
        />
      </div>
    </div>
  );
};
