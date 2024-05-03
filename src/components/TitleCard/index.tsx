import { PropsWithChildren } from "react";

export default function TitleCard({ children }: PropsWithChildren) {
  return <h1 className="font-bold text-2xl text-slate-500">{children}</h1>;
}
