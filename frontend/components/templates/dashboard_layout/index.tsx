import CreateFormModal from "@/components/organisms/create_form_modal";
import Sidebar from "@/components/organisms/sidebar";
import Topbar from "@/components/organisms/topbar";
import { ReactNode, useState } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
     const [showForm, setShowForm] = useState(false)
  return (
    <div className="w-full flex justify-between">
      <div className="w-[15%] hidden lg:block md:fixed h-screen">
        <Sidebar />
      </div>

      {/* <div className="w-[15%] fixed h-screen md:hidden">
        <Sidebar />
      </div> */}

      <div className="flex flex-col gap-8 w-90% lg:w-[80%] py-4 px-8 mx-auto  lg:mr-10">
        <Topbar onClick={() =>setShowForm(true)} />

        <div className="w-full">{children}</div>
      </div>

      {
    showForm && <CreateFormModal onClose={() => setShowForm(false)}/>
}
    </div>
  );
};

export default DashboardLayout;
