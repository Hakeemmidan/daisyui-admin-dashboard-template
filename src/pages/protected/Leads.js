import { useEffect } from "react";
import useStore from "../../app/store_zustand";
import Leads from "../../features/leads";

function InternalPage() {
  const setPageTitle = useStore((state) => state.setPageTitle);

  useEffect(() => {
    setPageTitle("Leads");
  }, [setPageTitle]);

  return <Leads />;
}

export default InternalPage;
