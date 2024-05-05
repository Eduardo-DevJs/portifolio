import Container from "../../components/Container";
import curriculo from "../../assets/MinimalistaNeutro.pdf";
import { FaDownload } from "react-icons/fa";
import Input from "../../components/Input";
import TextArea from "../../components/textarea";

export default function About() {
  let currentYear = new Date().getFullYear();
  let currentAge = currentYear - 2001;

  return (
    <Container>
      <div className="grid md:grid-cols-2 gap-20">
        <div className="space-y-5 flex flex-col items-start">
          <h1 className="text-4xl text-slate-500 font-bold select-none">
            Sobre Mim
          </h1>
          <p className="text-slate-500 leading-10 font-semibold text-xs md:text-xl select-none">
            Desenvolvedor Frontend, recém formado em desenvolvimento de sistemas
            pela SENAI no estado do Espirito Santo. Apaixonado por técnologias e
            por ensinar! 👨‍💻. Atualmente tenho {currentAge} anos nascido e criado
            no estado do Espirito Santo. Morando na cidade de Cariacica. Sou
            técnico em desenvolvimento de sistemas (2022 - 2023).
          </p>
          <a
            className="bg-sky-600 font-bold flex items-center p-3 gap-3 rounded-md text-white"
            href={curriculo}
            download={curriculo}
          >
            Baixar o curriculo
            <FaDownload />
          </a>
        </div>

        <form className="space-y-3 md:mt-5">
          <h1 className="text-center text-slate-500 md:text-2xl font-bold">
            Entre em Contato 😉
          </h1>
          <div>
            <label className="block text-slate-500 text-base font-medium">
              Nome
            </label>
            <Input placeholder="Seu nome" name="name" type="text" />
          </div>
          <div>
            <label className="block text-slate-500 text-base font-medium">
              Email
            </label>
            <Input placeholder="Seu email" name="email" type="email" />
          </div>
          <div>
            <label className="block text-slate-500 text-base font-medium">
              Mensagem
            </label>
            <TextArea placeholder="Descreva..." />
          </div>
          <button
            type="submit"
            className="bg-sky-500 text-white text-xl font-medium w-full p-3 rounded-md "
          >
            Enviar
          </button>
          <input
            type="hidden"
            name="accessKey"
            value="54b87fa5-1902-4fc5-a485-d1dc6149b217"
          ></input>
        </form>
      </div>
    </Container>
  );
}
