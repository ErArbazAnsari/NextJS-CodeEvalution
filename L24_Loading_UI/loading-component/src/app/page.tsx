import { resolve } from "path";

export default async function Home() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("delay");
    }, 3000);
  });

  return (
    <>
      <h1>Hello, 👋</h1>
    </>
  );
}
