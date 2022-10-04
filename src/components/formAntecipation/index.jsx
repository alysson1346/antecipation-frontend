import Api from "../../services";
import "./style.css";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormAntecipation = () => {
  const formSchema = Yup.object().shape({
    amount: Yup.number("Deve ser número").required("Campo obrigatório"),
    installments: Yup.number("Deve ser número").required("Campo obrigatório"),
    mdr: Yup.number("Deve ser número").required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmit = (data) => {
    Api.post("", data)
      .then((res) => {
        console.log(res.data);
        return toast.success("Sucesso", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        console.log(err);
        return toast.error("Algo deu errado", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <div>
      <form className="formBox" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="titleForm">Simule sua Antecipação</h1>
        <div className="divOneInput">
          <label className="labelsForm">Informe o valor da venda*</label>
          <input
            className="inputsForm"
            placeholder="Digite aqui o valor"
            {...register("amount")}
          />
          <span className="errorsYup">{errors.amount?.message}</span>
        </div>

        <div className="divOneInput">
          <label className="labelsForm">Em quantas parcelas*</label>
          <input
            className="inputsForm"
            placeholder="Digite aqui as parcelas"
            {...register("installments")}
          />
          <span className="installmentsSpan">Máximo de 12 parcelas</span>
          <span className="errorsYup">{errors.installments?.message}</span>
        </div>

        <div className="divOneInput">
          <label className="labelsForm">Informe o percentual de MDR*</label>
          <input
            className="inputsForm"
            placeholder="Digite aqui o percentual"
            {...register("mdr")}
          />
          <span className="errorsYup">{errors.mdr?.message}</span>
        </div>

        <button className="btnLogin" type="submit">
          Fazer Simulação
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default FormAntecipation;
