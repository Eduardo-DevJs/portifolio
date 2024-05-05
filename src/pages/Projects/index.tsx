import Container from "../../components/Container";

import ListProjects from "../../components/ListProjects";

export default function Projects() {
  return (
    <Container>
      <div className="space-y-5 rounded-md">
        <h1 className="text-4xl text-slate-500 font-bold text-center">
          Meus projetos
        </h1>
        <ListProjects />
      </div>
    </Container>
  );
}
