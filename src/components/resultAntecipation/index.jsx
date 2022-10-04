import "./style.css";
let lista = { 1: 13267, 15: 13536, 30: 13824, 90: 14400 };
const ResultAntecipation = () => {
  /*   Object.keys(lista).forEach(function (key) {
    console.log(lista[key]);
  }); */
  return (
    <div>
      <p className="teste">Você Receberá:</p>
      <div className="listAntecipation"></div>
      {Object.keys(lista).forEach(function (key) {
        return (
          <div>
            <p>{lista[key]}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ResultAntecipation;
