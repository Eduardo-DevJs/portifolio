import { useTheme } from "../../Contexts/ThemeContext";
import CardProfile from "../../components/CardProfile";
import Card from "../../components/Cards";
import Container from "../../components/Container";


export default function Home() {
  const { theme } = useTheme();
  const isChangedTheme = theme === "light" ? "bg-zinc-200" : "bg-slate-800";

  return (
    <div className={`${isChangedTheme}`}>
      <Container>
        <div className="grid gap-y-4 md:gap-4 md:grid-cols-3">
          <CardProfile />

          <ul className="grid md:grid-cols-2 col-span-2 gap-4">
            <Card />
          </ul>
        </div>
      </Container>
    </div>
  );
}
