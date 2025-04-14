import { useEffect } from "react";
import useStore from "../../app/store_zustand";
import Dashboard from "../../features/dashboard/index";

function InternalPage() {
  const setPageTitle = useStore((state) => state.setPageTitle);

  useEffect(() => {
    setPageTitle("Dashboard");
  }, [setPageTitle]);

  return <Dashboard />;
}

export default InternalPage;
