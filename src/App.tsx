import { Button } from "./components/ui/button";

export function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <h1 className="text-2xl">Hello, World!</h1>
        <Button className="cursor-pointer">Click me</Button>
      </div>
    </>
  );
}
