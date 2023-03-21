import { useRef } from "react"
import Head from "next/head"
import Editor from "@monaco-editor/react"
import { useTheme } from "next-themes"

import { siteConfig } from "@/config/site"
import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

export default function IndexPage() {
  const { theme, systemTheme } = useTheme()
  const editorRef = useRef(null)

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor
  }

  function showValue() {
    alert(editorRef.current.getValue())
  }

  return (
    <Layout>
      <Head>
        <title>{siteConfig.name}</title>
        <meta name="description" content={siteConfig.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container mt-16 grid items-center justify-center gap-12 pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-center gap-8 text-center">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Regular expressions made easy, generated with the help of AI.
          </h1>
          <h2 className="max-w-[700px] text-lg text-neutral-700 dark:text-neutral-400 sm:text-xl">
            Simplify RegExp with our AI-powered regular expression utility. No
            more frustration, no more confusion - just the perfect expression
            generated for any use case.
          </h2>
        </div>
        <div className="grid w-full max-w-full gap-4">
          <h3 className="flex flex-nowrap items-center space-x-2 font-bold">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 p-4 text-white dark:bg-neutral-50 dark:text-neutral-900">
              1
            </span>
            <span>
              Paste or create the code snippet that you would like to create a
              regular expression for.
            </span>
          </h3>
          <Editor
            className="flex h-72 w-full rounded-md border border-neutral-300 bg-transparent py-2 px-3 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:text-neutral-50 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900"
            defaultLanguage="html"
            theme={
              theme === "dark" || (theme === "system" && systemTheme === "dark")
                ? "vs-dark"
                : "vs"
            }
            defaultValue="<button type='button' class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Default</button>"
            options={{ minimap: { enabled: false }, automaticLayout: true, wordWrap: "on", formatOnPaste: true, extraEditorClassName: 'text-red-500' }}
            onMount={handleEditorDidMount}
          />
        </div>
        <Separator />
        <div className="grid w-full gap-4">
          <h3 className="flex flex-nowrap items-center space-x-2 font-bold">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 p-4 text-white dark:bg-neutral-50 dark:text-neutral-900">
              2
            </span>
            <span>
              Explain the RegExp that you are looking to create (include a few
              examples of what to match from the code above).
            </span>
          </h3>
          <Textarea placeholder="e.g. Match all TailwindCSS dark mode styles starting with `dark:`. Include additional modifiers and exclude any quotation marks and unnecessary whitespace. Examples include: `dark:text-white` and `dark:hover:bg-gray-900`." />
          <Button>Generate your RegExp &rarr;</Button>
        </div>
      </section>
    </Layout>
  )
}
