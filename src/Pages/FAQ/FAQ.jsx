import React from "react";

const FAQ = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl font-semibold sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 mb-8 dark:text-gray-400">
          Sagittis tempor donec id vestibulum viverra. Neque condimentum primis
          orci at lacus amet bibendum.
        </p>
        <div className="space-y-4">
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              what is cors?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              Cross-origin resource sharing (CORS) is a browser mechanism which
              enables controlled access to resources located outside of a given
              domain. It extends and adds flexibility to the same-origin policy
              (SOP). However, it also provides potential for cross-domain
              attacks, if a website's CORS policy is poorly configured and
              implemented. CORS is not a protection against cross-origin attacks
              such as cross-site request forgery (CSRF).
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              Why are you using firebase? What other options do you have to
              implement authentication?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              Firebase helps you develop high-quality apps, grow your user base,
              and earn more money. Each feature works independently, and they
              work even better together.Usually, authentication by a server
              entails the use of a user name and password. Other ways to
              authenticate can be through cards, retina scans, voice
              recognition, and fingerprints.
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              How does the private route work?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              Justo libero tellus integer tincidunt justo semper consequat
              venenatis aliquet imperdiet. Ultricies urna proin fusce nulla
              pretium sodales vel magna et massa euismod vulputate sed.{" "}
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              What is Node? How does Node work?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              Justo libero tellus integer tincidunt justo semper consequat
              venenatis aliquet imperdiet. Ultricies urna proin fusce nulla
              pretium sodales vel magna et massa euismod vulputate sed.{" "}
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
