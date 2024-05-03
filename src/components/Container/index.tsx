import { PropsWithChildren } from "react";

export default function Container({ children }: PropsWithChildren) {
  return <div className="max-w-7xl mx-auto p-3">{children}</div>;
}
