const Contact = () => {
    return (
      <section
        id="contact"
        className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6"
      >
        <h2 className="text-[8vw] font-bold mb-20">CONTACT</h2>
        <div className="flex flex-col gap-8 w-full max-w-4xl">
          <a
            href="https://www.linkedin.com/in/lucasalba/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black text-2xl font-medium rounded-full py-6 w-full text-center hover:bg-gray-100 transition-colors"
          >
            LINKEDIN
          </a>
          <a
            href="https://github.com/lucas-alba"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black text-2xl font-medium rounded-full py-6 w-full text-center hover:bg-gray-100 transition-colors"
          >
            GITHUB
          </a>
          <a
            href="albal@cua.edu"
            className="bg-white text-black text-2xl font-medium rounded-full py-6 w-full text-center hover:bg-gray-100 transition-colors"
          >
            EMAIL
          </a>
        </div>
      </section>
    );
  };
  
  export default Contact;
  