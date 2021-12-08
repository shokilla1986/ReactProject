import { headerStyles } from "./header-styles";
import { Link } from "react-router-dom";

export const Header = () => {
  const styles = headerStyles();
  return (
    <div className={styles.header}>
      <Link to="/">Home </Link>
      <Link to="/profile">Profile</Link>
      <Link to="/chat">Chat</Link>
      <Link to="/gists">Gists</Link>
    </div>
  );
};
