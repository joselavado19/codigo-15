import { Card, Form } from "../../components";
import { inputs } from "./form";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveUser } from "../../slices/userSlice";
import { findUser, showError } from "../../utils";

export default function SignIn() {
  const { values, errors, handleInputChange, validateIfValuesHasEmpty } =
    useForm({
      username: "",
      password: "",
    });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateIfValuesHasEmpty()) return;

    const user = await findUser( { username:values.username , clave:values.password} );

    if (!user || user.error === true) {
      showError("Username y/o password incorrecto");
      return;
    }

    dispatch(saveUser(user));
    navigate("/");
  };

  return (
    <>
      <div className="h-screen flex justify-center items-center  ">
        <Card className="max-w-md mx-0 text-center">
          <div className="flex justify-center pt-5 pb-10">
            <img
              className="w-65 h-18 object-cover "
              src="./logo.png"
              alt="Logo Buena Salud"
            />
          </div>
          <h1 className="text-3xl mt-5 mb-3">Acceso</h1>
          <p className="mb-5">Bienvenido! Inicia sesión</p>
          <Form
            inputs={inputs}
            values={values}
            errors={errors}
            textButton="Iniciar Sesión"
            handleFormSubmit={handleSubmit}
            handleInputChange={handleInputChange}
          />
        </Card>
      </div>
    </>
  );
}
