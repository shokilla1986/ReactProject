import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useStyles } from "./message-list-styles";
import { Message } from "./message";

export const MessageList = () => {
  const [messages, setMessages] = useState({});
  const [value, setValue] = useState("");
  const { roomId } = useParams();
  const ref = useRef(null);
  const refWrapper = useRef(null);
  const styles = useStyles();

  useEffect(() => {
    const roomMessages = messages[roomId] || [];
    let timerId = null;
    const lastMessages = roomMessages[roomMessages.length - 1];
    if (roomMessages.length && lastMessages.author !== "Bot") {
      timerId = setTimeout(() => {
        setMessages({
          ...messages,
          [roomId]: [
            ...(messages[roomId] || []),
            { author: "Bot", message: "hello from bot", id: new Date() },
          ],
        });
      }, 500);
    }

    return () => clearInterval(timerId);
  }, [messages, roomId]);

  useEffect(() => {
    ref.current?.focus();
  });

  useEffect(() => {
    if (refWrapper.current) {
      refWrapper.current.scrollTo(0, refWrapper.current.scrollHeight);
    }
  }, [messages]);

  const sendMessage = () => {
    if (value) {
      setMessages({
        ...messages,
        [roomId]: [
          ...(messages[roomId] || []),
          { author: "User", message: value, id: new Date() },
        ],
      });

      setValue("");
    }
  };

  const pressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage();
    }
  };

  const roomMessages = messages[roomId] || [];

  return (
    <div className={styles.wrapper}>
      <div ref={refWrapper} className={styles.content}>
        {roomMessages.map((message, id) => (
          <Message message={message} key={id} />
        ))}

        {/* <Button onClick={sendMessage}>send message</Button> */}
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
              <Send className={styles.icon} onClick={sendMessage} />
            </InputAdornment>
          }
        />
      </div>
    </div>
  );
};
