const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-2">Adele Lawady Portfolio</h2>
          <p className="text-gray-400 mb-4">
            Showcasing my professional projects and skills.
          </p>
          <div className="flex justify-center gap-4 mb-4">
            <a href="https://github.com/adelelawady" className="text-white hover:text-gray-300">
              🌟 GitHub
            </a>
            <a href="https://www.linkedin.com/in/adelelawady" className="text-white hover:text-gray-300">
              💼 LinkedIn
            </a>
            <a href="mailto:adelelawady@gmail.com" className="text-white hover:text-gray-300">
              ✉️ Email
            </a>
          </div>
          <p className="text-gray-500">
            Created with ❤️ by Adele Lawady. © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    );
  };
  