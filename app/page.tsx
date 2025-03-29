import Link from "next/link";
export default function Home() {

  const itIsFriday = () => {
    switch (new Date().getDay()) {
      case 4:
        return 'Soon';
      case 5:
        return 'Yes';
      default:
        return 'No';
    }  
  }

  return (
    <div className="w-screen h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center">
        <h1 className="text-8xl font-bold">{itIsFriday()}</h1>
      </main>
      <footer className="py-4 flex items-center justify-center">
        <Link href="https://blog.crazykids.tech" className="text-center">© CrazyKids Studio</Link>
        <span className="mx-2">•</span>
        <Link href="https://www.memora.top">Memora</Link>
        <span className="mx-2">•</span>
        <Link href="https://www.blackscreennow.space">Black Screen</Link>
      </footer>
    </div>
  );
}
