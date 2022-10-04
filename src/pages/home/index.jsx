import "./style.css";
import FormAntecipation from "../../components/formAntecipation";
import ResultAntecipation from "../../components/resultAntecipation";

const Home = () => {
  return (
    <div className="boxHome">
      <div className="containerAntecipation">
        <FormAntecipation />
      </div>
      <div className="containerResultAntecipation">
        <ResultAntecipation />
      </div>
    </div>
  );
};

export default Home;
