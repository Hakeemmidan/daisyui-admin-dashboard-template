import { useEffect } from "react";
import useStore from "../../app/store_zustand";
import DocComponentsNav from "./components/DocComponentsNav";
import DocComponentsContent from "./components/DocComponentsContent";

function DocComponents() {
  const setPageTitle = useStore((state) => state.setPageTitle);

  useEffect(() => {
    setPageTitle("Documentation");
  }, [setPageTitle]);

  return (
    <>
      <div
        className="bg-base-100  flex overflow-hidden  rounded-lg"
        style={{ height: "82vh" }}
      >
        <div className="flex-none p-4">
          <DocComponentsNav activeIndex={1} />
        </div>

        <div className="grow pt-16  overflow-y-scroll">
          <DocComponentsContent />
        </div>
      </div>
    </>
  );
}

export default DocComponents;
