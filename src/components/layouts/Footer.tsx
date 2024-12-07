import { AiWebBrowsingIcon, GithubIcon, NewTwitterIcon } from '../common/icons'

export default () => {
  return (
    <footer className="mt-8 border-border/40 border-t">
      <div className="container flex items-center justify-between gap-4 p-4">
        <p className="text-muted-foreground text-xs">
          Developed by{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://soheilghanbary.ir"
            className="font-medium text-foreground underline decoration-wavy underline-offset-4"
          >
            Soheil Ghanbary
          </a>
        </p>
        <div className="flex items-center gap-6">
          <GithubIcon className="size-4 text-foreground" />
          <NewTwitterIcon className="size-4 text-foreground" />
          <AiWebBrowsingIcon className="size-4 text-foreground" />
        </div>
      </div>
    </footer>
  )
}
