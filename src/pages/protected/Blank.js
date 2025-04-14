import { useEffect } from "react";
import useStore from "../../app/store_zustand";
import DocComponentsNav from "../../features/documentation/components/DocComponentsNav";
import GettingStartedNav from "../../features/documentation/components/GettingStartedNav";

function InternalPage() {
  const setPageTitle = useStore((state) => state.setPageTitle);

  useEffect(() => {
    setPageTitle("Documentation");
  }, [setPageTitle]);

  return (
    <div className="h-full w-full bg-base-200 flex items-center">
      <div className="card w-full max-w-xl mx-auto shadow-xl">
        <div className="py-12 p-10 bg-base-100 rounded-xl">
          <div className="flex justify-center mb-8">
            <DocComponentsNav activeIndex={0} />
          </div>
          <GettingStartedNav />
        </div>
      </div>
    </div>
  );
}

export default InternalPage;
