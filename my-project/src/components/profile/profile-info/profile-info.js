import { useSelector } from "react-redux";

export const ProfileInfo = () => {
  const { name, surname, age, profession, ...profile } = useSelector(
    (state) => state.profile
  );
  return (
    <>
      <p>name: {name}</p>
      <p>surname: {surname}</p>
      <p>age: {age}</p>
      <p>profession: {profession}</p>
    </>
  );
};
