import { title } from "process";
import { FormEvent, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";

import { MainButton } from "../../components/buttons/MainButton";
import { MainInput } from "../../components/inputs/MainInput";
import { useAuthContext } from "../../hooks/useAuthContext";
import { pushNewRoom } from "../../services/firebase";

import { Container, Aside, Main, Wrapper, Header, Footer } from "./styles";

export const NewRoom = () => {
  const [roomTitle, setRoomTitle] = useState("");
  const { user } = useAuthContext();
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  }, [user]);

  async function createRoom(event: FormEvent) {
    event.preventDefault();

    if (roomTitle.trim() === "") {
      return;
    }

    const createdRoom = await pushNewRoom({ roomTitle, userId: user?.id });
    if (createdRoom?.key) {
      history.push(`/rooms/${createdRoom?.key}`);
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
            <h1>Crie uma nova sala</h1>
          </Header>
          <Footer>
            <form onSubmit={createRoom}>
              <MainInput
                placeholder="Digite o código da sala"
                type="text"
                value={roomTitle}
                onChange={(event) => setRoomTitle(event.target.value)}
              />
              <MainButton
                color="var(--purple-500)"
                text="Criar sala"
                type="submit"
              />
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
