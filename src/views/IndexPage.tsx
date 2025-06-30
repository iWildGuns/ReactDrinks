//
import { useAppStore } from "../store/useAppStore";

export default function IndexPage() {
  useAppStore((state) => state.categories);
  return (
    <>
      {" "}
      <h1>Inicio</h1>
    </>
  );
}
