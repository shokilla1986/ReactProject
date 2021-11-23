import * as React from "react";

import { ChatListStyles } from "./chat-list-styles";

export const ChatList = () => {
  const styles = ChatListStyles();

  return (
    <div className={styles.wrapper}>
      <a className={styles.a} href="#">
        Chat 1
      </a>
      <a className={styles.a} href="#">
        Chat 2
      </a>
      <a className={styles.a} href="#">
        Chat 3
      </a>
    </div>
  );
};
