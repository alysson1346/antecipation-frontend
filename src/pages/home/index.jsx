import "./style.css";
import FormAntecipation from "../../components/formAntecipation";
import ResultAntecipation from "../../components/resultAntecipation";
import { useState } from "react";

const Home = () => {
  const [list, setList] = useState({});
  const [haveRequest, setHaveRequest] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div className="boxHome">
      <div className="containerAntecipation">
        <FormAntecipation
          setList={setList}
          setHaveRequest={setHaveRequest}
          setLoading={setLoading}
          loading={loading}
        />
      </div>
      <div className="containerResultAntecipation">
        <ResultAntecipation
          list={list}
          haveRequest={haveRequest}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default Home;
