import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";

import { MainButton } from "../../components/buttons/MainButton";
import { MainInput } from "../../components/inputs/MainInput";
import { useAuthContext } from "../../hooks/useAuthContext";

import { Container, Aside, Main, Wrapper, Header, Footer } from "./styles";

export const NewRoom = () => {
  const { user } = useAuthContext();
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  }, [user]);
  return (
    <Container>
      <Aside>
        <img src={illustrationImg} alt="Ilustração" />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire as dúvidas de sua audiência em tempo real</p>
      </Aside>
      <Main>
        <Wrapper>
          <Header>
            <img src={logoImg} alt="Letmeask" className="logo" />
            <h1>Crie uma nova sala</h1>
          </Header>
          <Footer>
            <form>
              <MainInput placeholder="Digite o código da sala" type="text" />
              <MainButton color="var(--purple-500)" text="Criar sala" />
            </form>
            <div style={{ display: "flex" }}>
              <span>Quer entrar em uma sala já existente? </span>
              <a onClick={() => history.push("/")}>Clique aqui</a>
            </div>
          </Footer>
        </Wrapper>
      </Main>
    </Container>
  );
};
