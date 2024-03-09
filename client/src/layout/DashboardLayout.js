import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ModalNewQuestion from "../components/ModalNewQuestion";

const DashboardLayout = ({ children }) => {
  const [modalNewQuestionOpen, SetModalNewQuestionOpen] = useState(false);

  return (
    <>
      {/* Sidebar */}
      <Sidebar />

      {/* Content */}
      <div
        className="lg:ml-[300px] relative h-full max-h-screen rounded-xl transition-all duration-200 bg-white"
        id="panel"
      >
        {/* Navbar */}
        <Navbar />

        {/* Children */}

        <div className="w-full px-10 py-6 mx-auto loopple-min-height-78vh text-slate-500">
          {/* Button to add a new question */}
          <div className="text-end">
            <a
              onClick={() => SetModalNewQuestionOpen(!modalNewQuestionOpen)}
              className="inline-block text-base font-medium mb-5 leading-normal text-center align-middle cursor-pointer rounded-lg transition-colors duration-150 ease-in-out text-white bg-primary shadow-none border-0 px-4 py-2 hover:bg-primary-dark active:bg-primary-dark focus:bg-primary-dark ml-auto"
            >
              Add new question
            </a>
          </div>

          <ModalNewQuestion
            SetModalNewQuestionOpen={SetModalNewQuestionOpen}
            modalNewQuestionOpen={modalNewQuestionOpen}
          />

          {children}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
