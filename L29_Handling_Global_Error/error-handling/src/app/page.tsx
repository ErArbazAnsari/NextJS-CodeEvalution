function generateNumber(count: number) {
  return Math.floor((Math.random() * count));
}

export default function Home() {
  const randomInt = generateNumber(2);
  if (randomInt === 1) {
    return new Error("Error loading review")
  }
  return (
    <h1 className="text-4xl">Hello, 👋</h1>
  );
}
