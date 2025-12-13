//import { redirect } from 'react-router';
import Picture from '../assets/for-order.png'
import Input from './Input';
import './Main.css'

function Main({setOrders, authStatus}) {
  console.debug("authStatus: " + authStatus);

  //if (!authStatus) {
  //  throw redirect("/login");
  //}

  return (
    <main className="Main">
      <img src={Picture} alt="Обложка сайта" width="300px" />
      <h1>Заказ</h1>
      <form action={(date, time, guests, tel) => setOrders(... {date, time, guests, tel})}>
        <Input id="date" type="date" text="Дата" />
        <Input id="time" type="time" text="Время" />
        <Input id="guests" type="number" text="Количество гостей" />
        <Input
          id="tel"
          placeholder="+7(XXX)-XXX-XX-XX"
          type="tel"
          text="Номер телефона"
        />
        <button>Вход</button>
      </form>
    </main>
  );
}

export default Main;
