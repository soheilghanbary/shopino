import { NextjsIcon, ReactIcon, TailwindCSSIcon } from '../common/icons'

export default () => {
  return (
    <div className="my-8 grid gap-4">
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
