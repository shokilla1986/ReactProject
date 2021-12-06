import { ProfileInfo } from "./profile-info";
import { ProfileChange } from "./profile-change";
import { useSelector } from "react-redux";

export const ProfileComp = () => {
  const { ...profile } = useSelector((state) => {
    return state.profile;
  });
  return (
    <div>
      <ProfileInfo {...profile} />
      <ProfileChange {...profile} />
    </div>
  );
};
