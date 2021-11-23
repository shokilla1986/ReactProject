import React, { useEffect, useRef, useState } from "react";

import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useStyles } from "./message-list-styles";
import { Message } from "./message";
// import styles from "./message-list.module.css";

export const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");

  const ref = useRef(null);
  const refWrapper = useRef(null);
  const styles = useStyles();

  useEffect(() => {
    let timerId = null;
    const lastMessages = messages[messages.length - 1];
    if (messages.length && lastMessages.author !== "Bot") {
      timerId = setTimeout(() => {
        setMessages([
          ...messages,
          { author: "Bot", message: "hello from bot" },
        ]);
      }, 2000);
    }

    return () => clearInterval(timerId);
  }, [messages]);

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
      setMessages([
        ...messages,
        { author: "User", message: value, id: new Date() },
      ]);

      setValue("");
    }
  };

  const pressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className={styles.wrapper}>
      <div ref={refWrapper} className={styles.content}>
        {messages.map((message, id) => (
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
