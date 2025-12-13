import { Link } from "react-router";
import Input from "../Input";
import "./Registration.css";
import Picture from "../../assets/for-login.png";

function Registration({setAuthStatus}) {
  return (
    <main className="Registration">
      <img src={Picture} alt="Обложка сайта" width="300px" />
      <h1>Регистрация</h1>
      <form action={() => setAuthStatus(true)}>
        <Input id="login" placeholder="логин" type="text" text="Логин" />
        <Input
          id="password"
          placeholder="password"
          type="password"
          text="Пароль"
        />
        <Input id="name" placeholder="Имя" type="text" text="Имя" />
        <Input id="surname" placeholder="Фамилия" type="text" text="Фамилия" />
        <Input
          id="email"
          placeholder="yashik@pochta.ru"
          type="email"
          text="E-Mail"
        />
        <Input
          id="tel"
          placeholder="+7(XXX)-XXX-XX-XX"
          type="tel"
          text="Номер телефона"
        />
        <button>Регистрация</button>
      </form>
      <Link to="/login">Вход с существующего аккаунта</Link>
    </main>
  );
}

export default Registration;
