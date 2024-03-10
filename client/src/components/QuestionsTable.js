import { useState } from "react";
import { useDeleteQuestion, useQuestions } from "../queries/questions";
import InputSearch from "./InputSearch";

// Table row for each question
const QuestionRow = ({
  id,
  question,
  questionDescription,
  company,
  createdAt,
  updatedAt,
  createdBy,
  answer,
}) => {
  // Function to open question details
  const openQuestionDetails = (event) => {
    const tableRow = event.target.closest("tr");
    if (tableRow) {
      tableRow.classList.toggle("open");
      tableRow.nextElementSibling.classList.toggle("hidden");
    }
  };

  //Handle delete question
  const { deleteQuestion, isLoading } = useDeleteQuestion();

  const handleDeleteQuestion = async (questionId) => {
    try {
      await deleteQuestion(questionId);
    } catch (error) {
      console.error("Failed to delete question:", error);
    }
  };

  return (
    <>
      <tr
        aria-controls={`order-${id}`}
        className={`hidden group-[.status-all]:table-row group-[.status-test]:table-row border-b border-dashed group peer/order-${id} last:border-b-0`}
      >
        <td className="p-3 pl-0 max-w-[200px]">
          <p className="transition-colors duration-200 ease-in-out break-words text-secondary-inverse hover:text-primary text-sm">
            {question}
          </p>
        </td>
        <td className="p-3 text-sm font-semibold">{company}</td>
        <td className="p-3 text-end">
          <a className="transition-colors duration-200 ease-in-out hover:text-primary text-sm">
            {createdAt}
          </a>
        </td>
        <td className="p-3 text-end text-sm"> {updatedAt} </td>
        <td className="p-3 text-end">
          <span className="font-bold text-sm text-secondary-inverse">
            {createdBy}
          </span>
        </td>
        <td className="p-3 pr-0 text-end">
          <button
            onClick={openQuestionDetails}
            className="ml-auto relative text-secondary-dark bg-light-dark group-[.open]:text-primary group-[.open]:bg-primary-light hover:text-primary hover:bg-primary-light flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center"
          >
            <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="group-[.open]:hidden block w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="hidden group-[.open]:block w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 12H6"
                />
              </svg>
            </span>
          </button>
        </td>
      </tr>
      <tr
        aria-describedby={`order-${id}`}
        className={`border-b hidden peer-[.open]/order-${id}:table-row border-dashed last:border-b-0`}
      >
        <td className="p-3 pl-0 max-w-[200px]">
          <div className="flex items-center gap-3 w-full">
            <div className="flex flex-col justify-start w-full">
              <a className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-sm text-secondary-inverse hover:text-primary">
                Answer:
              </a>
              <p className="text-muted block font-semibold text-sm break-words">
                {answer ? answer : "Not provided"}
              </p>
            </div>
          </div>
        </td>
        <td className="p-3 max-w-[200px]">
          <div className="text-secondary-inverse text-sm">
            Question description:
          </div>
          <div className="font-semibold text-muted text-sm">
            {questionDescription ? questionDescription : "Not provided"}
          </div>
        </td>
        <td></td>
        <td></td>

        <td className="p-3 text-end">
          <a className="inline-block w-auto text-sm font-medium leading-normal text-center align-middle cursor-pointer rounded-lg transition-colors duration-150 ease-in-out text-white bg-primary shadow-none border-0 px-3 py-2 hover:bg-primary-dark active:bg-primary-dark focus:bg-primary-dark mb-2">
            Edit Question
          </a>
          <a
            className="inline-block text-sm font-medium leading-normal text-center align-middle cursor-pointer rounded-lg transition-colors duration-150 ease-in-out text-white bg-danger shadow-none border-0 px-3 py-2 hover:bg-danger-dark active:bg-danger-dark focus:bg-danger-dark ml-2 mb-2"
            onClick={() => handleDeleteQuestion(id)}
            disabled={isLoading}
          >
            {isLoading ? "Deleting..." : "Delete Question"}
          </a>
        </td>
      </tr>
    </>
  );
};

const QuestionsTable = () => {
  // Get questions from the useQuestions hook
  const getQuestions = useQuestions();

  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize] = useState(10); // Assuming each page contains 10 questions

  const {
    data: questions,
    isLoading,
    isError,
  } = useQuestions(pageNumber, pageSize);

  if (isLoading) {
    return (
      <div className="text-2xl text-dark font-bold">Loading questions...</div>
    );
  }

  return (
    <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30 mb-5">
      {/* card header */}
      <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
        <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
          <span className="mr-3 font-semibold text-dark">Questions</span>
        </h3>
        <div className="relative flex flex-wrap items-center my-2">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center font-semibold">
              <div className="text-secondary-dark text-[.95rem] mr-2">
                Status
              </div>
              <div choices-select-table="">
                <select
                  choices-select=""
                  choices-filter-table="table-orders-1"
                  filter="status"
                  className="inline-block appearance-none mr-3 text-[0.925rem] focus:outline-none font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light border-light shadow-none border-0  py-2 px-5 hover:bg-light-dark active:bg-light-dark focus:bg-light-dark"
                >
                  <option value="all">All</option>
                  <option value="delivered">Delivered</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="rejected">Rejected</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
            </div>
            <div className="relative my-1">
              <span className="absolute ml-4 leading-none -translate-y-1/2 top-1/2 text-muted">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </span>
              <InputSearch />
            </div>
          </div>
        </div>
      </div>
      {/* end card header */}
      {/* card body  */}
      <div className="flex-auto block py-8 pt-6 px-9">
        <div className="overflow-x-auto">
          <table
            id="table-search"
            nested-table=""
            filter-table=""
            aria-describedby="table-orders-1"
            className="w-full align-middle table-search text-lg/normal group status-all text-dark border-neutral-200"
          >
            <thead className="align-bottom">
              <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                <th className="p-3 pr-32 pl-0 border-b border-dashed text-start min-w-[100px]">
                  Question
                </th>
                <th className="p-3 border-b border-dashed text-start min-w-[100px]">
                  Company Name
                </th>
                <th className="p-3 border-b border-dashed min-w-[125px]">
                  Created At
                </th>
                <th className="p-3 border-b border-dashed text-end min-w-[100px]">
                  Updated At
                </th>
                <th className="p-3 border-b border-dashed text-end min-w-[100px]">
                  Created By
                </th>

                <th className="p-3 pr-0 border-b border-dashed text-end min-w-[50px]" />
              </tr>
            </thead>
            <tbody className="font-semibold text-light-inverse">
              {questions.records.map((question) => (
                <QuestionRow
                  key={question.id}
                  id={question.id}
                  question={question.fields["Question"]}
                  questionDescription={question.fields["Question Description"]}
                  company={question.fields["Company Name"]}
                  createdAt={question.fields["Created At"]}
                  updatedAt={question.fields["Updated At"]}
                  createdBy={question.fields["Created By"]}
                  answer={question.fields["Answer"]}
                />
              ))}
            </tbody>
          </table>
          <div className="flex flex-wrap items-center justify-center pt-10">
            <ul className="inline-flex">
              <li className="mr-2">
                <a className="relative px-3 py-[.375rem] text-stone-500 transition-colors duration-150 ease-in-out flex items-center justify-center rounded h-10 w-10 font-medium text-lg hover:bg-gray-100 hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="mr-2">
                <a
                  aria-current="page"
                  className="relative px-3 py-[.375rem] text-white transition-colors duration-150 ease-in-out flex items-center justify-center rounded h-10 w-10 font-medium text-lg bg-primary"
                >
                  1
                </a>
              </li>
              <li className="mr-2">
                <a className="relative px-3 py-[.375rem] text-stone-500 transition-colors duration-150 ease-in-out flex items-center justify-center rounded h-10 w-10 font-medium text-lg hover:bg-gray-100 hover:text-primary">
                  2
                </a>
              </li>
              <li className="mr-2">
                <a className="relative px-3 py-[.375rem] text-stone-500 transition-colors duration-150 ease-in-out flex items-center justify-center rounded h-10 w-10 font-medium text-lg hover:bg-gray-100 hover:text-primary">
                  ...
                </a>
              </li>
              <li className="mr-2">
                <a className="relative px-3 py-[.375rem] text-stone-500 transition-colors duration-150 ease-in-out flex items-center justify-center rounded h-10 w-10 font-medium text-lg hover:bg-gray-100 hover:text-primary">
                  8
                </a>
              </li>
              <li className="mr-2">
                <a className="relative px-3 py-[.375rem] text-stone-500 transition-colors duration-150 ease-in-out flex items-center justify-center rounded h-10 w-10 font-medium text-lg hover:bg-gray-100 hover:text-primary">
                  9
                </a>
              </li>
              <li className="mr-2">
                <a className="relative px-3 py-[.375rem] text-stone-500 transition-colors duration-150 ease-in-out flex items-center justify-center rounded h-10 w-10 font-medium text-lg hover:bg-gray-100 hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsTable;
