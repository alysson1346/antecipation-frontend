import Api from "../../services";
import "./style.css";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import BrlCurrencyComponent from "../../utils";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const FormAntecipation = ({ setList, setHaveRequest, setLoading, loading }) => {
  const [valueAmounts, setValueAmounts] = useState("");

  const formSchema = Yup.object().shape({
    installments: Yup.number("Deve ser número")
      .required("Campo obrigatório")
      .typeError("Deve ser número"),
    mdr: Yup.number("Deve ser número")
      .required("Campo obrigatório")
      .typeError("Deve ser número"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmit = (data) => {
    setLoading(true);

    const { installments, mdr } = data;
    let amount = valueAmounts * 100;
    let newData = { amount, installments, mdr };

    Api.post("", newData)
      .then((res) => {
        setList(res.data);
        setLoading(false);
        setHaveRequest(true);
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
        setLoading(false);
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
          <BrlCurrencyComponent
            setValueAmounts={setValueAmounts}
          ></BrlCurrencyComponent>
        </div>

        <div className="divOneInput">
          <label className="labelsForm">Em quantas parcelas*</label>
          <select id="installments" {...register("installments")}>
            <option defaultValue="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>

          <span className="installmentsSpan">Máximo de 12 parcelas</span>
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

        <button type="submit">Fazer Simulação</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default FormAntecipation;
