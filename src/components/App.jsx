import Container from './Container/Container';
import { Routes, Route } from 'react-router-dom';
import { Phonebook } from 'components/Phonebook';
import { AboutPage } from './AboutPage';
import { AppBar } from './AppBar';
// import { Login, Register } from './Auth';
import { HomePage } from './HomePage';
import LoginView from 'views/LoginView';
import RegisterView from 'views/RegisterView';

export default function App() {
  return (
    <Container>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="contacts" element={<Phonebook />} />
        <Route path="register" element={<RegisterView />} />
        <Route path="login" element={<LoginView />} />
      </Routes>

      <AboutPage />
    </Container>
  );
}
