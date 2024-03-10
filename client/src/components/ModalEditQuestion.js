import { useEffect, useState } from "react";
import { useUpdateQuestion } from "../queries/questions";

const ModalEditQuestion = ({
  SetModalEditQuestionOpen,
  modalEditQuestionOpen,
  modalEditQuestionData,
}) => {
  // Handle create question
  const { updateQuestion, isLoading } = useUpdateQuestion();

  const [questionData, setQuestionData] = useState(modalEditQuestionData);

  useEffect(() => {
    setQuestionData(modalEditQuestionData);
  }, [modalEditQuestionData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setQuestionData((prevQuestionData) => ({
      ...prevQuestionData,
      [name]: value,
    }));
  };

  const handleEditQuestion = async (event, questionData) => {
    event.preventDefault();
    try {
      await updateQuestion(questionData);
      SetModalEditQuestionOpen(false);
    } catch (error) {
      console.error("Failed to update question:", error);
    }
  };

  return (
    <div
      style={{ display: modalEditQuestionOpen ? "block" : "none" }}
      className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full m-auto bg-dark/40"
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full m-auto mt-10">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Edit a question
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="default-modal"
              onClick={() => SetModalEditQuestionOpen(!modalEditQuestionOpen)}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5 space-y-4">
            <form
              onSubmit={(event) => handleEditQuestion(event, questionData)}
              className="px-3"
            >
              <label
                className="inline-block mb-2 text-[1.15rem] font-medium text-dark"
                htmlFor="Question"
              >
                Question
              </label>
              <textarea
                rows="5"
                type="text"
                name="Question"
                id="Question"
                className="w-full px-4 py-3 text-base/normal rounded-xl font-medium block transition-colors duration-200 ease-in-out bg-secondary-light focus:bg-secondary/40 text-stone-500 border focus:outline-none mb-3"
                placeholder="Enter your question"
                spellCheck="false"
                defaultValue={questionData.question}
                onChange={handleChange}
              ></textarea>

              <label
                className="inline-block mb-2 text-[1.15rem] font-medium text-dark"
                htmlFor="Answer"
              >
                Answer
              </label>
              <textarea
                rows="5"
                type="text"
                name="Answer"
                id="Answer"
                className="w-full px-4 py-3 text-base/normal rounded-xl font-medium block transition-colors duration-200 ease-in-out bg-secondary-light focus:bg-secondary/40 text-stone-500 border focus:outline-none mb-3"
                placeholder="Enter your answer"
                spellCheck="false"
                defaultValue={questionData.answer}
                onChange={handleChange}
              ></textarea>

              <label
                className="inline-block mb-2 text-[1.15rem] font-medium text-dark"
                htmlFor="Company"
              >
                Company Name
              </label>
              <input
                type="text"
                name="Company"
                id="Company"
                defaultValue={questionData.company}
                className="peer w-full px-4 py-3 text-base/normal rounded-xl font-medium block transition-colors duration-200 ease-in-out bg-secondary-light focus:bg-secondary/40 text-stone-500 border focus:outline-none mb-3"
                placeholder="Enter company name"
                onChange={handleChange}
              />

              <label
                className="inline-block mb-2 text-[1.15rem] font-medium text-dark"
                htmlFor="Id"
              >
                Company Id
              </label>
              <input
                type="text"
                name="Id"
                id="Id"
                defaultValue={questionData.id}
                className="peer w-full px-4 py-3 text-base/normal rounded-xl font-medium block transition-colors duration-200 ease-in-out bg-secondary-light focus:bg-secondary/40 text-stone-500 border focus:outline-none mb-3"
                placeholder="xxxxxx"
                onChange={handleChange}
              />
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  type="submit"
                  className="inline-block text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-lg transition-colors duration-150 ease-in-out text-white bg-primary shadow-none border-0 px-4 py-2 hover:bg-primary-dark active:bg-primary-dark focus:bg-primary-dark ml-auto"
                >
                  {isLoading ? "Loading..." : "Edit question"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEditQuestion;
