import { ProfileInfo } from "./profile-info";
import { ProfileChange } from "./profile-change";
import { useSelector } from "react-redux";
import { profileSelector } from "../../store/profile";
import { useMemo } from "react";

export const ProfileComp = () => {
  const profileSelectorByMemo = useMemo(() => {
    return profileSelector("test props");
  }, []);

  const { isVisibleProfile, ...profile } = useSelector(profileSelectorByMemo);

  return (
    <div>
      <ProfileInfo {...profile} />
      {isVisibleProfile && <ProfileChange {...profile} />}
    </div>
  );
};
