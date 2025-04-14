import { useEffect } from "react";
import useStore from "../../app/store_zustand";
import FeaturesNav from "./components/FeaturesNav";
import FeaturesContent from "./components/FeaturesContent";

function Features() {
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
          <FeaturesNav activeIndex={1} />
        </div>

        <div className="grow pt-16  overflow-y-scroll">
          <FeaturesContent />
        </div>
      </div>
    </>
  );
}

export default Features;
