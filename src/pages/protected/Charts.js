import { useEffect } from "react";
import useStore from "../../app/store_zustand";
import Charts from "../../features/charts";

function InternalPage() {
  const setPageTitle = useStore((state) => state.setPageTitle);

  useEffect(() => {
    setPageTitle("Analytics");
  }, [setPageTitle]);

  return <Charts />;
}

export default InternalPage;
