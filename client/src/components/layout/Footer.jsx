import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-6xl mx-auto flex flex-col gap-6 px-4 py-10 text-center md:text-left md:flex-row md:items-center md:justify-between">
        <div>
          <p className="uppercase text-sm">
            Dog Breeds Explorer
          </p>
          <h3 className="text-2xl font-semibold mt-2">
            Search & explore different dog breeds.
          </h3>
          <p className="mt-2">
            Powered by curated breed data, size filters, and lightning-fast
            search to help you find your next best friend.
          </p>
        </div>
        <div className="space-y-2">
          <p className="font-semibold uppercase tracking-wide text-sm">
            Need help?
          </p>
          <a
            href="mailto:devrainyel@gmail.com"
            className="block hover:text-blue-200 transition-colors"
          >
            devrainyel@gmail.com
          </a>
          <a
            href="https://github.com/devrainyel/dog-breeds-explorer"
            target="_blank"
            rel="noreferrer"
            className="block hover:text-blue-200 transition-colors"
          >
            View project on GitHub
          </a>
        </div>
      </div>
      <div className="border-t border-white py-4 text-center text-sm space-y-2">
        <p>
          © {new Date().getFullYear()} Dog Breeds Explorer · Built by RainyelDev.
        </p>
        <p>
          Breed data provided by{" "}
          <a
            href="https://thedogapi.com"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-blue-200"
          >
            thedogapi.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;