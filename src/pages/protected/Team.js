import { useEffect } from "react";
import useStore from "../../app/store_zustand";
import Team from "../../features/settings/team";

function InternalPage() {
  const setPageTitle = useStore((state) => state.setPageTitle);

  useEffect(() => {
    setPageTitle("Team Members");
  }, [setPageTitle]);

  return <Team />;
}

export default InternalPage;
