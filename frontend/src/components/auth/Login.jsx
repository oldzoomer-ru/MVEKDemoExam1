import { Link } from "react-router";
import "./Login.css";
import Picture from "../../assets/for-login.png";
import Input from "../Input";

function Login({setAuthStatus}) {
  return (
    <main className="Login">
      <img src={Picture} alt="Обложка сайта" width="300px" />
      <h1>Вход</h1>
      <form action={() => setAuthStatus(true)}>
        <Input id="login" placeholder="логин" type="text" text="Логин" />
        <Input
          id="password"
          placeholder="password"
          type="password"
          text="Пароль"
        />
        <button>Вход</button>
      </form>
      <Link to="/registration">Еще не зарегистрированы? Регистрация</Link>
    </main>
  );
}

export default Login;
