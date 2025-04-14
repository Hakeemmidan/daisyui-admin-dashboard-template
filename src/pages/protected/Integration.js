import { useEffect } from "react";
import useStore from "../../app/store_zustand";
import Integration from "../../features/integration";

function InternalPage() {
  const setPageTitle = useStore((state) => state.setPageTitle);

  useEffect(() => {
    setPageTitle("Integrations");
  }, [setPageTitle]);

  return <Integration />;
}

export default InternalPage;
