import { NextjsIcon, ReactIcon, TailwindCSSIcon } from '../common/icons'

const MadeBy = () => (
  <div className="grid gap-4 pt-12">
    <h2 className="font-bold text-lg lg:text-2xl">Made By</h2>
    <ul className="list-disc pl-4 text-foreground/85 text-sm/6 md:text-base/6 [&_li]:py-0.5">
      <li>TypeScript</li>
      <li>Tailwind CSS</li>
      <li>React.JS 19 & NextJS 15</li>
      <li>@tanstack/react-query / zustand</li>
    </ul>
  </div>
)

export default () => {
  return (
    <div className="grid gap-4 pt-12">
      <h2 className="font-bold text-lg lg:text-2xl">Technologies</h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div className="grid gap-2 rounded-xl border p-6 shadow-sm">
          <NextjsIcon className="size-8" />
          <h3 className="font-bold text-lg">Next.JS v15</h3>
          <p className="text-muted-foreground text-xs/5">
            Next.js is a React framework that's primarily used to build
            server-rendered and statically generated applications. It provides a
            structure and set of tools that simplify the development of complex
            web applications.
          </p>
        </div>
        <div className="grid gap-2 rounded-xl border p-6 shadow-sm">
          <ReactIcon className="size-8" />
          <h3 className="font-bold text-lg">React Server Component</h3>
          <p className="text-muted-foreground text-xs/5">
            React Server Components are a newer feature in React that allow you
            to write server-side code directly within your React components.
            This means that parts of your application can be rendered on the
            server, reducing the amount of JavaScript sent to the client.
          </p>
        </div>
        <div className="grid gap-2 rounded-xl border p-6 shadow-sm">
          <TailwindCSSIcon className="size-8" />
          <h3 className="font-bold text-lg">TailwindCSS</h3>
          <p className="text-muted-foreground text-xs/5">
            Tailwind CSS is a utility-first CSS framework. Instead of writing
            custom CSS classes, you compose classes from a pre-defined set to
            rapidly build user interfaces.
          </p>
        </div>
      </div>
    </div>
  )
}
