import Header from './components/Header';
import { Container } from './components/styled/Container.styled';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styled/Global';
import Card from './components/Card';
import Footer from './components/Footer';
import Form from './components/Form';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#ebfbff',
  },
  mobile: '768px',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <Card />
        </Container>
        <Form />
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
