import Head from "next/head"

import { siteConfig } from "@/config/site"
import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>{siteConfig.name}</title>
        <meta
          name="description"
          content={siteConfig.description}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container mt-16 grid items-center justify-center gap-12 pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-center gap-8 text-center">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Regular expressions made easy, generated with the help of AI.
          </h1>
          <h2 className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
            Simplify RegExp with our AI-powered regular expression utility. No more frustration, no more confusion - just the perfect expression generated for any use case.
          </h2>
        </div>
        <div className="grid w-full gap-4">
          <h3 className="flex flex-nowrap items-center space-x-2 font-bold"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 p-4 text-white dark:bg-slate-50 dark:text-slate-900">1</span><span>Paste or create the code snippet that you would like to create a regular expression for.</span></h3>
          <Textarea placeholder='e.g. <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>' />
        </div>
        <Separator />
        <div className="grid w-full gap-4">
          <h3 className="flex flex-nowrap items-center space-x-2 font-bold"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 p-4 text-white dark:bg-slate-50 dark:text-slate-900">2</span><span>Explain the RegExp that you are looking to create (include a few examples of what to match from the code above).</span></h3>
          <Textarea placeholder="e.g. Match all TailwindCSS dark mode styles starting with `dark:`. Include additional modifiers and exclude any quotation marks and unnecessary whitespace. Examples include: `dark:text-white` and `dark:hover:bg-gray-900`." />
          <Button>Generate your RegExp &rarr;</Button>
        </div>
      </section>
    </Layout>
  )
}
