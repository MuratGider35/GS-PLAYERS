import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import data from "./data";
import { useState } from "react";
import Button from "./components/Buttons/Button";
function App() {
  const [page, setPage] = useState(1);
  const userPerpage = 5;
  const lastInd = page * userPerpage;
  const firstInd = lastInd - userPerpage;
  const currentUsers = data.slice(firstInd, lastInd);
  return (
    <div className="App">
      <div>
        <Header
          firstInd={firstInd}
          lastInd={lastInd}
          currentUsers={currentUsers}
        />

        {currentUsers.map((item, key) => (
          <Main key={key} {...item} />
        ))}
      </div>
      <Button
        total={Math.ceil(data.length / userPerpage)}
        page={page}
        lastInd={lastInd}
        firstInd={firstInd}
        setPage={setPage}
      />
    </div>
  );
}

export default App;
