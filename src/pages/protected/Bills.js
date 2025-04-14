import { useEffect } from "react";
import useStore from "../../app/store_zustand";
import Billing from "../../features/settings/billing";

function InternalPage() {
  const setPageTitle = useStore((state) => state.setPageTitle);

  useEffect(() => {
    setPageTitle("Bills");
  }, [setPageTitle]);

  return <Billing />;
}

export default InternalPage;
