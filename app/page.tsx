/**
 * v0 by Vercel.
 * @see https://v0.dev/t/RWJ7kk4TsYz
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Work
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Education
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="px-4 md:px-6 flex-1 flex flex-col items-center py-12 lg:py-24">
        <div className="container grid items-start gap-4 text-center lg:grid-cols-[200px_1fr] lg:items-center lg:gap-10 xl:gap-16">
          <div className="mx-auto aspect-square overflow-hidden rounded-full border-4 border-gray-100 dark:border-gray-800 lg:aspect-circle">
            <img
              alt="Avatar"
              className="object-cover rounded-full aspect-image"
              height="200"
              src="/images/my picture.jpg"

              width="200"
            />
          </div>
          <div className="space-y-2">
            <div className="space-y-1">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Kang Huiseung</h1>
              <p className="text-gray-500 dark:text-gray-400">Web Developer</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-500 md:text-base/relaxed dark:text-gray-400">
                I'm a passionate web developer with a love for creating beautiful and functional websites.
              </p>
            </div>
          </div>
        </div>
        <div className="container grid max-w-5xl items-start gap-6 px-4 text-left md:gap-10"></div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">About Me</h2>
              <p className="text-gray-500 dark:text-gray-400">
                I'm a passionate web developer with a love for creating beautiful and functional websites.
              </p>
            </div>
            <div className="space-y-2">
      <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Skills</h2>
        <div className="grid gap-2 md:grid-cols-4">
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
          <div>React</div>
          <div>Android Studio</div>
          <div>Tailwind CSS</div>
          <div>C#</div>
          <div>TypeScript</div>
        </div>
        </div>
          </div>
          <div className="space-y-4">
  <div className="space-y-2">
    <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Projects</h2>
    <p className="text-gray-500 dark:text-gray-400">Here are some of the projects I've worked on:</p>
  </div>
  <div className="divide-y rounded-lg border">
    <div className="grid w-full grid-cols-2 items-stretch justify-center divide-x md:grid-cols-2">
      <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
  <img
    alt="Logo"
    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
    height="140"
    src="/gpmobile1.png"
    width="140"
  />
</a>
      </div>
      <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        <img
          alt="Logo"
          className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
          height="140"
          src="/Zombie.gif"
          width="140"
        />
        </a>
      </div>
    </div>
    <div className="grid w-full grid-cols-2 items-stretch justify-center divide-x md:grid-cols-2">
      <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        <img
          alt="Logo"
          className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
          height="140"
          src="/KAKAO.png"
          width="140"
        />
        </a>
      </div>
      <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        <img
          alt="Logo"
          className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
          height="140"
          src="/maps.png"
          width="140"
        />
        </a>
      </div>
    </div>
  </div>
</div>

      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
