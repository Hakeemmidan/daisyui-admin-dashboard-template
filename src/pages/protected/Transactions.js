import { useEffect } from "react";
import useStore from "../../app/store_zustand";
import Transactions from "../../features/transactions";

function InternalPage() {
  const setPageTitle = useStore((state) => state.setPageTitle);

  useEffect(() => {
    setPageTitle("Transactions");
  }, [setPageTitle]);

  return <Transactions />;
}

export default InternalPage;
