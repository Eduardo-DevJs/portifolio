import { FaRegCopy, FaWhatsapp } from "react-icons/fa";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useTheme } from "../../Contexts/ThemeContext";
import PhotoProfile from "../../assets/profile-removebg-preview.png";

export default function CardProfile() {
  const { theme } = useTheme();

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText("dudev2001@gmail.com");
      alert("Email copiado para área de tranferência");
    } catch (error) {
      console.log(`Erro ao copiar ${error}`);
    }
  }

  const isChangedTheme = theme === "light" ? "bg-white" : "bg-slate-900";

  return (
    <aside
      className={`${isChangedTheme} col-span-2 md:col-span-1 shadow p-5 rounded`}
    >
      <div className="space-y-5">
        <div
          className={`${
            theme === "light" ? "bg-zinc-200 " : "bg-slate-800"
          } w-full h-[250px] rounded`}
        >
          <img
            src={PhotoProfile}
            className="h-[250px] w-full object-cover"
            alt=""
          />
        </div>
        <h1 className="font-bold text-2xl text-slate-500">
          Eduardo de Oliveira (PCD) 🚀 
        </h1>
        <p className="text-slate-500 leading-8 font-semibold">
          Desenvolvedor Frontend, recém formado em desenvolvimento de sistemas
          pela SENAI no estado do Espirito Santo. Apaixonado por técnologias e
          por ensinar! 👨‍💻
        </p>
        <div className="flex items-center gap-2">
          <button className="p-4 flex items-center gap-4 bg-green-600 rounded font-bold text-white">
            <FaWhatsapp size={24} />
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=27988810106&text=Olá, estou interessado em seus serviços."
            >
              WhatsApp
            </a>
          </button>
          <button
            onClick={handleCopyEmail}
            className="p-4 flex items-center gap-4  bg-sky-600 rounded font-bold text-white"
          >
            <FaRegCopy size={24} />
            <span>Copiar Email</span>
          </button>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/eduardo-oliveira-liria-849467246/"
            target="_blank"
            className="border border-gray-40 p-2 rounded text-slate-500 hover:text-sky-500"
          >
            <FiLinkedin size={24} />
          </a>
          <a
            href="https://github.com/Eduardo-DevJs"
            target="_blank"
            className="border border-gray-40 p-2 rounded text-slate-500 hover:text-sky-500"
          >
            <FiGithub size={24} />
          </a>
        </div>
      </div>
    </aside>
  );
}
