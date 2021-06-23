import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";

import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";
import googleIconImg from "../../assets/images/google-icon.svg";
import { BoxArrowInRight } from "../../styles/Icons";

import { MainButton } from "../../components/buttons/MainButton";
import { MainInput } from "../../components/inputs/MainInput";
import { Break } from "../../components/Break";

import { Container, Aside, Main, Wrapper, Header, Footer } from "./styles";
import { useAuthContext } from "../../hooks/useAuthContext";
import { joinRoom } from "../../services/firebase";

export const Home = () => {
  const [roomKey, setRoomKey] = useState("");
  const { user, signInWithGoogle } = useAuthContext();
  const history = useHistory();

  async function handleSignInWithGoogle() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push("/rooms/new");
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    try {
      await joinRoom({ roomKey });

      history.push(`/rooms/${roomKey}`);
    } catch (err) {
      return err;
    }
  }

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
            <form onSubmit={handleJoinRoom}>
              <MainInput
                placeholder="Digite o código da sala"
                type="text"
                value={roomKey}
                onChange={(event) => setRoomKey(event.target.value)}
              />
              <MainButton
                color="var(--purple-500)"
                text="Entrar na sala"
                IconComponent={BoxArrowInRight}
              />
            </form>
          </Footer>
        </Wrapper>
      </Main>
    </Container>
  );
};
