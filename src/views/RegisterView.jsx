export default function RegisterView() {
  return (
    <div>
      <h1>Страница регистрации</h1>

      <form autoComplete="off">
        <label>
          Имя
          <input type="text" name="name" />
        </label>

        <br />
        <br />

        <label>
          Почта
          <input
            type="email"
            name="email"
            // value={email}
            // onChange={handleChange}
          />
        </label>

        <br />
        <br />

        <label>
          Пароль
          <input
            type="password"
            name="password"
            // value={password}
            // onChange={handleChange}
          />
        </label>

        <br />
        <br />

        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}
