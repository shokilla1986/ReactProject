import { appStyles } from "./app-styles";

export function App({ chats, messages }) {
  const styles = appStyles();
  return (
    <>
      <div className={styles.wrapper}>
        <>{chats}</>
        <>{messages}</>
      </div>
    </>
  );
}
