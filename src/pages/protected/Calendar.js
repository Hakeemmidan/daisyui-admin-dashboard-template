import { useEffect } from "react";
import useStore from "../../app/store_zustand";
import Calendar from "../../features/calendar";

function InternalPage() {
  const setPageTitle = useStore((state) => state.setPageTitle);

  useEffect(() => {
    setPageTitle("Calendar");
  }, [setPageTitle]);

  return <Calendar />;
}

export default InternalPage;
