import { useSelector, useDispatch } from "react-redux";
import { toggleVisibleProfile } from "../../../store/profile";

export const ProfileInfo = () => {
  const { isVisibleProfile, ...profile } = useSelector(
    (state) => state.profile
  );

  const dispatch = useDispatch();
  return (
    <>
      <p>name: {profile.name}</p>
      <p>surname: {profile.surname}</p>
      <p>age: {profile.age}</p>
      <p>profession: {profile.profession}</p>
      <button onClick={() => dispatch(toggleVisibleProfile())}>
        Редактировать профиль
      </button>
    </>
  );
};
