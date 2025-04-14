import { useEffect } from "react";
import useStore from "../../app/store_zustand";
import ProfileSettings from "../../features/settings/profilesettings";

function InternalPage() {
  const setPageTitle = useStore((state) => state.setPageTitle);

  useEffect(() => {
    setPageTitle("Settings");
  }, [setPageTitle]);

  return <ProfileSettings />;
}

export default InternalPage;
