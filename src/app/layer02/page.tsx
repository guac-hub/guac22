import Link from 'next/link'

export default function Layer2Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        (Second page yaaaas) 
    <Link href="/">
      Back to main
    </Link>
    </main>
  );
}
