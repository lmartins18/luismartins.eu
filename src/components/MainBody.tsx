export const MainBody = () => (
  <section className="bg-white dark:bg-gray-900  flex-1">
    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="bg-gradient-to-r from-cyan-300 via-zinc-200 to-red-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
          Understand User Flow.
          <span className="sm:block"> Increase Conversion. </span>
        </h1>

        <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          illo tenetur fuga ducimus numquam ea!
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="block w-full rounded border border-cyan-600 bg-cyan-600 dark:border-red-600 dark:bg-red-600  px-12 py-3 text-sm font-medium text-white hover:text-cyan-600 dark:hover:text-black hover:bg-transparent focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            href="/get-started"
          >
            Get Started
          </a>

          <a
            className="block w-full rounded border border-cyan-600 dark:border-red-600 hover:bg-cyan-600 dark:hover:bg-red-600 active:bg-cyan-500 dark:active:bg-red-500 px-12 py-3 text-sm font-medium  focus:outline-none focus:ring sm:w-auto text-cyan-600 dark:text-inherit hover:text-white"
            href="/about"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
);
