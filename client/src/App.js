import axios from "axios";
import "./App.css";

import DashboardLayout from "./layout/DashboardLayout";
import QuestionsTable from "./components/QuestionsTable";
import AppConfig from "./config";

const createQuestion = () => {
  axios.post(`${AppConfig.serverUrl}/create`, { data: "test" }).then((data) => {
    console.log(data);
  });
};

const updateQuestion = () => {
  axios.post(`${AppConfig.serverUrl}/update`, { data: "test" }).then((data) => {
    console.log(data);
  });
};

const deleteQuestion = () => {
  axios.post(`${AppConfig.serverUrl}/delete`).then((data) => {
    console.log(data);
  });
};

function App() {
  return (
    <>
      <DashboardLayout>
        <QuestionsTable />
      </DashboardLayout>
    </>
  );
}

export default App;
