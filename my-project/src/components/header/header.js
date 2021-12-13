import { headerStyles } from "./header-styles";
import { Link } from "react-router-dom";
import { firebaseApp } from "../../api/firebase";

const signOut = () => {
  return firebaseApp.auth().signOut();
};

export const Header = ({ session }) => {
  const styles = headerStyles();
  return (
    <div className={styles.header}>
      <Link to="/">Home </Link>
      {session && (
        <>
          <Link to="/profile">Profile</Link>
          <Link to="/chat">Chat</Link>
          <Link to="/gists">Gists</Link>
        </>
      )}

      {session && <button onClick={signOut}>Exit</button>}

      {!session && (
        <>
          <Link to="/login">Login</Link>
          <Link to="/sing-up">Sing-up</Link>
        </>
      )}
    </div>
  );
};
