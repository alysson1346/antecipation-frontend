import "./style.css";

const ResultAntecipation = ({ list, haveRequest, loading }) => {
  const convertCurrency = (value) => {
    return (value / 100).toFixed(2).toString().replace(".", ",");
  };
  return (
    <div>
      {loading ? (
        <span className="spinner"></span>
      ) : (
        <>
          {haveRequest ? (
            <>
              <p className="titleResultsAntecipation">Você Receberá:</p>
              <div className="listAntecipation"></div>
              {Object.keys(list).map(function (key) {
                return key === "1" ? (
                  <div className="boxResultAntecipation" key={key}>
                    <p className="key">Amanhã:</p>
                    <p className="resultKey">R${convertCurrency(list[key])}</p>
                  </div>
                ) : (
                  <div className="boxResultAntecipation" key={key}>
                    <p className="key">Em {key} Dias:</p>
                    <p className="resultKey">R${convertCurrency(list[key])}</p>
                  </div>
                );
              })}
            </>
          ) : (
            <p className="titleResultsAntecipation">Faça uma simulação</p>
          )}
        </>
      )}
    </div>
  );
};

export default ResultAntecipation;
