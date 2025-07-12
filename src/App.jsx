import { useState, useEffect } from 'react';
import { Moon, Sun, Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white px-6 py-10">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">Krishna Murthy Srinivasan</h1>
        <button
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <Sun /> : <Moon />}
        </button>
      </header>

      <section className="mb-12">
        <p className="text-lg max-w-3xl">
          A developer with 4 years of experience in cloud-native architectures, automation, and backend systems.
          Specializes in AWS cloud development, Python scripting, system integrations, and scalable observability stacks.
          Passionate about building efficient systems and continuous learning.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="bg-green-600 text-white px-3 py-1 rounded">Open to Work</span>
          <span className="bg-blue-900 text-white px-3 py-1 rounded">Prev: SDE @Autodesk, Infosys</span>
          <span className="bg-blue-600 text-white px-3 py-1 rounded">Open to Freelancing / Consulting</span>
          <span className="bg-orange-700 text-white px-3 py-1 rounded">Learning new tools regularly</span>
        </div>
      </section>

      <nav className="flex gap-6 text-lg font-semibold mb-10">
        <a className="underline underline-offset-4 decoration-2 decoration-white dark:decoration-gray-700">Projects</a>
        <a href="#contact">Contact me</a>
      </nav>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
        <!-- (unchanged content) -->
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        <!-- (unchanged content) -->
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Recent Projects</h2>
        <p className="text-gray-400 italic">Coming soon… currently working on exciting automation and AWS-based infrastructure projects.</p>
      </section>

      <section id="contact" className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
        <form className="flex flex-col gap-4 max-w-xl">
          <input className="px-4 py-2 border dark:border-gray-700 rounded bg-white dark:bg-black" type="text" placeholder="Your Name" required />
          <input className="px-4 py-2 border dark:border-gray-700 rounded bg-white dark:bg-black" type="email" placeholder="Your Email" required />
          <textarea className="px-4 py-2 border dark:border-gray-700 rounded bg-white dark:bg-black" rows="4" placeholder="Your Message" required></textarea>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" type="submit">Send Message</button>
        </form>

        <div className="flex gap-6 mt-8 text-lg">
          <a href="https://www.linkedin.com/in/krishnamurthy-awsdeveloper" target="_blank" className="flex items-center gap-2 text-blue-500"><Linkedin size={20} />LinkedIn</a>
          <a href="mailto:harikrishnachn@gmail.com" className="flex items-center gap-2 text-red-500"><Mail size={20} />Gmail</a>
          <a href="https://medium.com/@harikrishnachn" target="_blank" className="flex items-center gap-2 text-gray-800 dark:text-gray-200"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/medium.svg" alt="Medium" className="w-5 h-5" />Medium</a>
          <a href="https://github.com/krishnamurthy-srinivasan" target="_blank" className="flex items-center gap-2 text-black dark:text-white"><Github size={20} />GitHub</a>
          <a href="#" className="flex items-center gap-2 text-blue-400"><Twitter size={20} />X</a>
        </div>
      </section>

      <footer className="pt-6 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm">Email: harikrishnachn@gmail.com</p>
        <p className="text-sm">GitHub: <a href="https://github.com/krishnamurthy-srinivasan" className="underline">krishnamurthy-srinivasan</a></p>
        <p className="text-sm">LinkedIn: <a href="https://linkedin.com/in/krishnamurthy-awsdeveloper" className="underline">krishnamurthy-awsdeveloper</a></p>
      </footer>
    </div>
  );
}
