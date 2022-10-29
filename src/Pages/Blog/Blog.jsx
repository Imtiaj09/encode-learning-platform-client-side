import React from "react";

const Blog = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase"></p>
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          BLOGS PAGE
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              what is cors?
            </summary>
            <div className="px-4 pb-4">
              <p>
                Cross-origin resource sharing (CORS) is a browser mechanism
                which enables controlled access to resources located outside of
                a given domain. It extends and adds flexibility to the
                same-origin policy (SOP). However, it also provides potential
                for cross-domain attacks, if a website's CORS policy is poorly
                configured and implemented. CORS is not a protection against
                cross-origin attacks such as cross-site request forgery (CSRF).
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Why are you using firebase? What other options do you have to
              implement authentication?
            </summary>
            <div className="px-4 pb-4">
              <p>
                Firebase helps you develop high-quality apps, grow your user
                base, and earn more money. Each feature works independently, and
                they work even better together.Usually, authentication by a
                server entails the use of a user name and password. Other ways
                to authenticate can be through cards, retina scans, voice
                recognition, and fingerprints.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              How does the private route work?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                The react private route component renders child components (
                children ) if the user is logged in. If not logged in the user
                is redirected to the /login page with the return url passed in
                the location state property.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What is Node? How does Node work?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                It is a used as backend service where javascript works on the
                server-side of the application. This way javascript is used on
                both frontend and backend. Node. js runs on chrome v8 engine
                which converts javascript code into machine code, it is highly
                scalable, lightweight, fast, and data-intensive
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Blog;
