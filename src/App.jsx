import { useState, useEffect } from 'react';
import { Moon, Sun, Mail, Github, Linkedin, FileText, ArrowDownCircle } from 'lucide-react';
import Typewriter from 'typewriter-effect';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-[length:400%_400%] animate-gradient text-black dark:text-white px-6 py-10 relative">
      <div className="max-w-5xl mx-auto">
        <header className="flex justify-between items-center mb-10 flex-wrap gap-6">
          <div className="flex-shrink-0">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-28 h-28 rounded-xl mb-4 shadow-lg shadow-black/40 dark:shadow-white/20"
            />
            <p className="text-xl mb-1">Hi There! This is</p>
            <h1 className="text-3xl font-bold">
              <Typewriter
                options={{
                  strings: ['Krishna Murthy Srinivasan'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-2 text-blue-800 dark:text-blue-300 hover:underline text-lg font-medium"
            >
              Let's Connect <ArrowDownCircle size={20} />
            </a>
          </div>
          <button
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </header>

        <section className="mb-12">
          <p className="text-lg max-w-3xl">
            Software Developer with 4 years of experience in cloud-native architectures, automation, and backend systems.
            Specializes in AWS cloud development, Python scripting, system integrations, and scalable observability stacks.
            Passionate about building efficient systems and continuous learning.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="bg-green-600 text-white px-3 py-1 rounded shadow-[0_4px_10px_rgba(34,197,94,0.5)] hover:bg-yellow-500">Open to Work</span>
            <span className="bg-blue-900 text-white px-3 py-1 rounded shadow-[0_4px_10px_rgba(30,64,175,0.5)] hover:bg-blue-700">SDE2 @Autodesk</span>
            <span className="bg-blue-600 text-white px-3 py-1 rounded shadow-[0_4px_10px_rgba(37,99,235,0.5)] hover:bg-blue-500">Open to Freelancing / Consulting</span>
            <span className="bg-orange-700 text-white px-3 py-1 rounded shadow-[0_4px_10px_rgba(194,65,12,0.5)] hover:bg-orange-600">Learning new tools regularly</span>
          </div>
          <div className="mt-6 fixed bottom-8 right-8 z-50">
            <a
              href="/Krishna_Murthy_Srinivasan_Resume.pdf"
              download
              className="animate-pulse flex items-center gap-2 bg-green-800 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-700"
            >
              <FileText size={20} /> Resume
            </a>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Recent Projects</h2>
          <p className="text-gray-700 dark:text-gray-300 italic">
            Coming soon… currently working on exciting automation and AWS-based infrastructure projects.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[ 'Python', 'AWS', 'Docker', 'Kubernetes', 'Lambda', 'API Gateway', 'PostgreSQL', 'Cassandra',
              'Airflow', 'Grafana', 'Prometheus', 'Power Automate', 'FastAPI', 'Flask', 'Helm', 'Kafka',
              'PySpark', 'Git/Github' ].map(skill => (
              <span key={skill} className="bg-gray-200 dark:bg-gray-800 text-sm px-3 py-1 rounded">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold">Autodesk – Software Development Engineer</h3>
              <p className="text-sm text-gray-500">Sept 2024 – Present</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Built automated workflows using Power Automate for vulnerability tracking and ticket creation</li>
                <li>Created Python-based alert systems for Wolken incidents</li>
                <li>Integrated Slack, Jira, Outlook for seamless notifications</li>
                <li>Designed auto-remediation pipelines from observability systems</li>
                <li>Automated Azure SSO app ownership validation using Lambda + Graph API</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold">Infosys – Senior Systems Engineer</h3>
              <p className="text-sm text-gray-500">Apr 2023 – Sept 2024</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Python simulator for Firmware testing (CPEs)</li>
                <li>Created observability stack: Vector → Kafka → Grafana</li>
                <li>Containerized apps to ECS/EKS with Cognito</li>
                <li>Implemented Helm + Prometheus + Grafana monitoring</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold">Infosys – Systems Engineer</h3>
              <p className="text-sm text-gray-500">May 2021 – Mar 2023</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Built 10+ Python APIs for Cassandra interaction</li>
                <li>PySpark-based ETL and S3 integration</li>
                <li>Deployed backend apps in EKS using Cronjobs</li>
                <li>Enhanced ML model performance for anomaly detection</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="mb-16">
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-lg">
            <a href="https://www.linkedin.com/in/krishnamurthy-awsdeveloper" target="_blank" className="text-blue-500 hover:scale-110 transition-transform"><Linkedin size={28} /></a>
            <a href="mailto:harikrishnachn@gmail.com" className="text-red-500 hover:scale-110 transition-transform"><Mail size={28} /></a>
            <a href="https://medium.com/@harikrishnachn" target="_blank" className="text-black dark:text-white hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1043.63 592.71" className="w-7 h-7 fill-current">
                <path d="M588.67 296.32c0 163.61-131.64 296.32-294.34 296.32S0 459.93 0 296.32 131.64 0 294.34 0s294.33 132.71 294.33 296.32zm330.35 0c0 153.75-66.73 278.5-149.06 278.5s-149.06-124.75-149.06-278.5 66.73-278.5 149.06-278.5 149.06 124.75 149.06 278.5zm124.61 0c0 142.94-29.29 258.84-65.44 258.84s-65.44-115.9-65.44-258.84 29.29-258.84 65.44-258.84 65.44 115.9 65.44 258.84z" />
              </svg>
            </a>
            <a href="https://github.com/krishnamurthy-srinivasan" target="_blank" className="text-black dark:text-white hover:scale-110 transition-transform"><Github size={28} /></a>
            <a href="#" className="text-black dark:text-white font-semibold hover:scale-110 transition-transform">X</a>
          </div>
        </section>

        <footer className="pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-center text-gray-600 dark:text-gray-400">
            Designed & Developed by Krishna Murthy Srinivasan | ©2025 All Rights Reserved
          </p>
        </footer>
      </div>
    </div>
  );
}
