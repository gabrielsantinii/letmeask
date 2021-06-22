import { useHistory } from "react-router-dom";
import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";
import googleIconImg from "../../assets/images/google-icon.svg";

import { MainButton } from "../../components/buttons/MainButton";
import { MainInput } from "../../components/inputs/MainInput";
import { Break } from "../../components/Break";

import { Container, Aside, Main, Wrapper, Header, Footer } from "./styles";
import { useAuthContext } from "../../hooks/useAuthContext";

export const Home = () => {
  const { user, signInWithGoogle } = useAuthContext();
  const history = useHistory();

  async function handleSignInWithGoogle() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push("/rooms/new");
  }

  console.log(user);
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
            <MainButton
              color="var(--red-500)"
              text="Crie sua sala com o Google"
              Icon={googleIconImg}
              onClick={handleSignInWithGoogle}
            />
          </Header>
          <Break>ou entre em uma sala</Break>
          <Footer>
            <form>
              <MainInput placeholder="Digite o código da sala" type="text" />
              <MainButton color="var(--purple-500)" text="Entrar na sala" />
            </form>
          </Footer>
        </Wrapper>
      </Main>
    </Container>
  );
};
