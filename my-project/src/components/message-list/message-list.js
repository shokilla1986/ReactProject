import React, { useCallback, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useStyles } from "./message-list-styles";
import { Message } from "./message";
import { messagesSelector, sendMessageFB } from "../../store/messages";
import {
  conversationsSelector,
  messageValueSelector,
  handleChangeMessageValue,
} from "../../store/conversations";

export const MessageList = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const messages = useSelector(messagesSelector(roomId));
  const conversations = useSelector(conversationsSelector);
  const value = useSelector(messageValueSelector(roomId));
  const ref = useRef(null);
  const refWrapper = useRef(null);
  const styles = useStyles();

  const dispatch = useDispatch();

  const send = useCallback(() => {
    if (value) {
      dispatch(sendMessageFB({ author: "User", message: value }, roomId));
    }
  }, [value, roomId, dispatch]);

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
    const isValidRoomId = conversations.find(
      (conversation) => conversation.title === roomId
    );
    if (!isValidRoomId && roomId) {
      navigate("/chat");
    }
  }, [conversations, roomId, navigate]);

  return (
    <div className={styles.wrapper}>
      <div ref={refWrapper} className={styles.content}>
        {messages.map((message, id) => (
          <Message
            message={message}
            key={id}
            dispatch={dispatch}
            roomId={roomId}
          />
        ))}
      </div>

      <div className={styles.input}>
        <Input
          fullWidth
          ref={ref}
          placeholder="send message..."
          value={value}
          onChange={(e) =>
            dispatch(handleChangeMessageValue(e.target.value, roomId))
          }
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
