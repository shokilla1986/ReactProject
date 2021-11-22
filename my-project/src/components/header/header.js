import { headerStyles } from "./header-styles";

export const Header = () => {
  const styles = headerStyles();
  return <div className={styles.header}>header</div>;
};
