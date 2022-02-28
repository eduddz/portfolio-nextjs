import styled from 'styled-components'

import Image from 'next/image'
import Diamante from './src/images/diamante.png';
import code from './src/images/parallax.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Header = styled.header`
  background: ${({ theme }) => theme.background.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
`;

const Div = styled.div`
  width: 110vw;
  height: 105px;
  overflow-y: hidden;
`;

const Span = styled.span`
  font-weight: bold;
`;

const Title = styled.h1`
  padding: 1rem;
  font-size: 64px;
  margin: 100px auto;
  width: 80vw;
  font-weight: 100;
  text-align: justify;

  @media (max-width: 1100px) {
    margin-top: 50px;
    font-size: 48px;
  }

  @media (max-width: 700px) {
    font-size: 36px;
  }

  Span {
    animation: texto 2s;
    background-image: linear-gradient(90deg, gold, purple);
    color: white;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @keyframes texto {
      from {
        opacity: 0;
      } to {
        opacity: 1;
      }
    }
  }
`;

const Icon = styled.div`
  width: 10px;
  margin: -50px auto;
  animation: mover 1.7s infinite alternate;

  @keyframes mover {
    from {
      transform: translateY(0);
    } to {
      transform: translateY(40px);
    }
  }
`;

const Parallax = styled.div`
  margin: 150px 0 50px;
  background-image: url('https://cdn.pixabay.com/photo/2018/04/16/10/33/universe-3324227_960_720.jpg');
  background-attachment: fixed;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 900;
  font-size: 160px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1100px) {
    font-size: 90px;
  }

  @media (max-width: 700px) {
    font-size: 72px;
  }
`;

const Projeto = styled.div`
  margin: 0 auto 100px;
  width: 80vw;

  @media (max-width: 1000px) {
    width: 90vw;
  }
`;

const T = styled.h2`
  padding: 10px;
  margin-bottom: 20px;
  font-size: 48px;
  width: 300px;
  display: flex;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  background: #c4c4c4;

  @media (max-width: 800px) {
    width: 200px;
    font-size: 30px;
  }
`;

const Slider = styled.div`
  width: 100%;

  img {
    max-height: 100%;
    border-radius: 20px;
  }
`;

const Descricao = styled.div`
  display: flex;
  flex-direction: row;

  p {
    padding: 10px 20px;
    margin-bottom: 20px;
    margin-right: 20px;
    background: #c1c1c1;
    border-radius: 20px;
    display: flex;
    align-items: center;

    @media (max-width: 900px) {
      padding: 5px 15px;
      margin-right: 10px;
      font-size: 12px;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Form = styled.form`
  margin: auto;
  width: 90vw;
  padding: 4rem 3rem;
  background: #eee;
  font-size: 36px;
`;

const Footer = styled.footer`
  margin-top: 100px;
  text-align: center;
  padding: 2rem;
  width: 100vw;
  background: #333;
  color: white;
`;

function Texto() {
  return (<span>Eduardo <Span>Esteves</Span></span>)
}

export default function Home() {
  return (
    <>
      <Header>
        <Image src={Diamante} alt="logo"/>
      </Header>
      <Div>
          <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto /> <Texto />
      </Div>

      <Title>
      Oi, sou programador <Span>FRONT-END</Span>.
Esse é meu portfólio, então <Span>deslizando para
baixo</Span> você vai encontrar <Span>vários projetos 
beeeeeeem legais</Span>. <br />
Estou constantemente adicionando <Span>novas 
funcionalidades, dicas e layouts</Span>. <br />
<Span>Aproveite!</Span>
      </Title>

      <Icon>
        <FontAwesomeIcon icon={faAngleDown} />
      </Icon>

      <Parallax>
        Meus projetos
      </Parallax>

      <Projeto>
        <T>WhatsApp</T>
        <Descricao>
          <p>REACTJS</p>
          <p>NEXTJS</p>
          <p>FIREBASE</p>
          <p>JAVASCRIPT</p>
          <p>STYLED-COMPONENTS</p>
        </Descricao>
        <Slider>
          <Image src={code} />
        </Slider>
      </Projeto>

      <Projeto>
      <T>WhatsApp</T>
        <Descricao>
          <p>REACTJS</p>
          <p>NEXTJS</p>
          <p>FIREBASE</p>
          <p>JAVASCRIPT</p>
          <p>STYLED-COMPONENTS</p>
        </Descricao>
        <Slider>
          <Image src={code} />
        </Slider>
      </Projeto>

      <Parallax>
        Contato
      </Parallax>
      <Form>
        <p>Para entrar em contato comigo, preencha o formulário abaixo ou me manda um email em:</p>
        <a href="mailto:esteves-dorta@hotmail.com">
          <p>
            esteves-dorta@hotmail.com
          </p>
        </a>
      </Form>

      <Footer>
        @copyright 2021
      </Footer>
    </>
  )
}
