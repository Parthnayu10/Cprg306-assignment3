import Image  from 'next/image';
import Link from 'next/link'; 


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-green-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-800 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">cprg306-assignment</code>
        </p>
      </div>
       
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div className="lg:order-2">
          {/* Add your content here */}
          <a
            href="/week2" // Add the link to "week2" here
            className="group rounded-lg border border-transparent px-8 py-6 transition-colors to-blue-800 hover:border-gray-30 bg-purple-300 hover:bg-gray-600 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Week 2 {' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[60ch] text-sm opacity-50`}>
              Access week 2.
            </p>
          </a>
          <a
            href="/week3" // Add the link to "week3" here
            className="group rounded-lg border border-transparent px-8 py-6 transition-colors to-blue-800 hover:border-gray-30 bg-purple-300 hover:bg-gray-600 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Week 3 {' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[60ch] text-sm opacity-50`}>
              Access week 3.
            </p>
          </a>
          <a
            href="/week4" // Add the link to "week4" here
            className="group rounded-lg border border-transparent px-8 py-6 transition-colors to-blue-800 hover:border-gray-30 bg-purple-300 hover:bg-gray-600 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Week 4 {' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[60ch] text-sm opacity-50`}>
              Access week 4.
            </p>
          </a>
          <a
            href="/week5" // Add the link to "week5" here
            className="group rounded-lg border border-transparent px-8 py-6 transition-colors to-blue-800 hover:border-gray-30 bg-purple-300 hover:bg-gray-600 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Week 5 {' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[60ch] text-sm opacity-50`}>
              Access week 5.
            </p>
          </a>
          <a
            href="/week6" // Add the link to "week6" here
            className="group rounded-lg border border-transparent px-8 py-6 transition-colors to-blue-800 hover:border-gray-30 bg-purple-300 hover:bg-gray-600 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Week 6 {' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[60ch] text-sm opacity-50`}>
              Access week 6.
            </p>
          </a>
          <a
            href="/week7" // Add the link to "week7" here
            className="group rounded-lg border border-transparent px-8 py-6 transition-colors to-blue-800 hover:border-gray-30 bg-purple-300 hover:bg-gray-600 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Week 7 {' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[60ch] text-sm opacity-50`}>
              Access week 7.
            </p>
          </a>
          <a
            href="/week8" // Add the link to "week7" here
            className="group rounded-lg border border-transparent px-8 py-6 transition-colors to-blue-800 hover:border-gray-30 bg-purple-300 hover:bg-gray-600 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Week 8 {' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[60ch] text-sm opacity-50`}>
              Access week 8.
            </p>
          </a>
          <a
            href="/week10" // Add the link to "week7" here
            className="group rounded-lg border border-transparent px-8 py-6 transition-colors to-blue-800 hover:border-gray-30 bg-purple-300 hover:bg-gray-600 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Week 10 {' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[60ch] text-sm opacity-50`}>
              Access week 10.
            </p>
          </a>
        </div>
      </div>
    </main>
  );
}