export default function LoginView() {
  return (
    <div>
      <h1>Страница логина</h1>

      <form autoComplete="off">
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

        <button type="submit">Войти</button>
      </form>
    </div>
  );
}
