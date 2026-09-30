import {
  Award,
  BookOpen,
  Briefcase,
  ChevronDown,
  Code,
  GraduationCap,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import emazImage from "../src/assets/emaz_img.jpg";
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const navigation = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "research", label: "Research" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gray-800">
              Mohammad Emaz Uddin
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-3 space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Mohammad Emaz Uddin
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-gray-700">
                Biomedical Physics & Electrical Engineering Researcher
              </p>
              <p className="text-lg mb-8 text-gray-600 md:max-w-xl">
                Specializing in IoT, Embedded Systems, Computational modeling,
                Biophysics and Biomedical Device Development
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Get In Touch
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="px-8 py-3 border-2 border-gray-800 text-gray-800 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-colors"
                >
                  View Projects
                </button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-gray-200 shadow-2xl">
                <img
                  src={emazImage}
                  alt="Mohammad Emaz Uddin"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center pb-8">
          <ChevronDown
            size={32}
            className="mx-auto animate-bounce text-gray-400"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-6">
              I am a dedicated researcher and engineer with a strong foundation
              in Electrical and Electronic Engineering from BUET and a completed
              M.S. in Biomedical Physics and Technology from the University of
              Dhaka.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              My research interests lie at the intersection of biomedical
              engineering, biophysics, and computational approaches to
              healthcare, with particular interests in eye biomechanics,
              computational modeling, biomedical signal and image processing,
              IoT, and embedded systems. I am passionate about applying
              engineering principles and computational techniques to understand
              complex biological systems and develop innovative solutions to
              real-world healthcare challenges.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              With experience in academic research, engineering, and
              professional education, I bring an interdisciplinary perspective
              to problem-solving, combining technical knowledge, research-driven
              thinking, and a strong interest in translating scientific ideas
              into practical applications.
            </p>
          </div>
          <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl text-left">
              <Lightbulb className="w-10 h-10 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Innovation</h3>
                <p className="text-gray-600">
                  Developing cutting-edge biomedical devices and IoT solutions
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl text-left">
              <Code className="w-10 h-10 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-1">
                  Technical Excellence
                </h3>
                <p className="text-gray-600">
                  Proficient in embedded systems, signal processing, and
                  automation
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl text-left">
              <Users className="w-10 h-10 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Leadership</h3>
                <p className="text-gray-600">
                  Experience in project management and team collaboration
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl text-left">
              <BookOpen className="w-10 h-10 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Research Focus</h3>
                <p className="text-gray-600">
                  Eye Biomechanics, Biophysics, Computational Modeling
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Education
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <EducationCard
              degree="Master of Science in Biomedical Physics and Technology"
              institution="University of Dhaka, Dhaka, Bangladesh"
              period="Apr 2025 - Present"
              details="CGPA: 4.00/4.00 (Ranked 1st in the Department)"
            />
            <EducationCard
              degree="Bachelor of Science in Electrical and Electronic Engineering"
              institution="Bangladesh University of Engineering and Technology, Dhaka, Bangladesh"
              period="Apr 2019 – Jun 2024"
              details="CGPA: 3.27/4.00 (Scored A+ in Thesis)"
              thesis="Determining The Battery Size For The On-Body Sensors Of Wireless Body Area Network"
            />
            <EducationCard
              degree="Higher Secondary School Certificate in Science"
              institution="Notre Dame College, Dhaka, Bangladesh"
              period="Jul 2016 – Jun 2018"
              details="Golden GPA: 5.00, Scholarship of Merit for 19th position in Board Talent Category"
            />
            <EducationCard
              degree="Secondary School Certificate in Science"
              institution="Nasirabad Govt. Boys High School, Chattogram, Bangladesh"
              period="Jan 2010 – May 2016"
              details="Golden GPA: 5.00, stood 12th in Chattogram Board with Talent-pool scholarship"
            />
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Research & Projects
          </h2>
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Published Research
            </h3>
            <div className="grid gap-6">
              <ResearchCard
                blue
                title="Exploratory Analysis of Age-Related Changes in Beef: Bioimpedance and Chemical Composition Perspectives"
                link="https://doi.org/10.3329/dujs.v74i1.81782"
              />
            </div>
          </div>
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Ongoing Research
            </h3>
            <div className="grid gap-6">
              <ResearchCard title="An Integrated Multiphysics Modeling of the Thermo-Fluidic Human Eye and Nanoparticle-Assisted Ocular Drug Delivery with Pharmacokinetic-Pharmacodynamic Coupling (M.S. Thesis)" />
              <ResearchCard title="COVID-19 Cough Audio Classification Using Machine Learning and Neural Networks" />
              <ResearchCard title="Determining Battery Size for the On-Body Sensors of Wireless Body Area Network (B.Sc. Thesis)" />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Ongoing Projects
            </h3>
            <div className="grid gap-6">
              <ProjectCard
                title="Developing Medical Device for Lymphedema in Lymphatic Filariasis Treatment"
                description="Under supervision of icddr,b & BMPT Department, DU"
              />
              <ProjectCard title="Developing IoT Based Portable ECG Acquisition & Measurement Device" />
              <ProjectCard title="Batteryless IoT Biosensor Node Powered by Body Heat and Motion for Long-Term Biomedical Monitoring" />
            </div>
          </div>
        </div>
      </section>

      {/* Academic Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Academic Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <AcademicProjectCard
              title="IoT Based Gas Burner Monitoring System"
              year="2024"
              lab="Robotics & Automation Lab"
              description="Smart sensors track gas levels, temperature and flame status in real-time, transmitting data wirelessly for remote monitoring with mobile device control."
            />
            <AcademicProjectCard
              title="Smart Home Automation with Enhanced Security"
              year="2023"
              lab="Microprocessors & Embedded Systems Lab"
              description="Sophisticated smart home system with IoT devices, voice commands, biometrics, gas leak detection, and real-time data logging."
            />
            <AcademicProjectCard
              title="GPS Guided Electrical Vehicle"
              year="2023"
              lab="Control Systems Lab"
              description="Electric vehicle navigation system using GPS technology with optimal route calculation and integrated safety sensors."
            />
            <AcademicProjectCard
              title="Battery Charger with Variable DC Output"
              year="2023"
              lab="Power Electronics Lab"
              description="Bidirectional DC-DC converter system with variable output and Arduino-based auto cut-off feature."
            />
            <AcademicProjectCard
              title="FPGA Smart Water Quality Monitoring System"
              year="2023"
              lab="Digital Electronics Lab"
              description="Integrated sensor system for water quality monitoring with real-time analysis on FPGA platform."
            />
            <AcademicProjectCard
              title="Emotion Recognition from Bangla Speech"
              year="2022"
              lab="Digital Signal Processing Lab"
              description="Machine learning system using SVM, DTW, and KNN for identifying five emotional states from Bangla speech."
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Professional Experience
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <ExperienceCard
              title="Physics Mentor"
              company="Shikho"
              period="Sept 2026 - Present"
              icon={<GraduationCap className="w-6 h-6" />}
            />
            <ExperienceCard
              title="Physics and Mathematics Instructor"
              company="10 Minute School"
              period="Jan 2022 – Dec 2023"
              icon={<BookOpen className="w-6 h-6" />}
            />
            <ExperienceCard
              title="Educator of Mathematics & ICT"
              company="ROOTs Edu"
              period="Feb 2021 – Oct 2021"
              icon={<GraduationCap className="w-6 h-6" />}
            />
            <ExperienceCard
              title="Project Manager"
              company="Ostad"
              period="Nov 2020 – Jun 2021"
              icon={<Briefcase className="w-6 h-6" />}
            />
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
              Club Activities
            </h3>
            <div className="max-w-4xl mx-auto space-y-6">
              <ExperienceCard
                title="Vice President"
                company="BUET Literature Club"
                period="Jun 2023 – Jun 2024"
                icon={<Users className="w-6 h-6" />}
              />
              <ExperienceCard
                title="Assistant Organizing Secretary"
                company="BUET Energy Club"
                period="Jul 2022 – Jun 2023"
                icon={<Users className="w-6 h-6" />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard
              title="Programming Languages"
              skills={[
                "C",
                "C++",
                "Verilog HDL",
                "System Verilog",
                "ARM Assembly",
              ]}
            />
            <SkillCard
              title="Software Tools"
              skills={[
                "Comsol Multiphysics",
                "MATLAB",
                "Simulink",
                "Proteus",
                "PSAF",
                "PSpice",
                "LTSpice",
                "Intel Quartus",
                "AutoCAD",
              ]}
            />
            <SkillCard
              title="Hardware"
              skills={[
                "Embedded Circuits Design",
                "FPGA",
                "PLC",
                "STM-32",
                "ESP-32",
                "NodeMCU",
                "Arduino",
              ]}
            />
            <SkillCard
              title="Research Interests"
              skills={[
                "Eye Biomechanics",
                "Biophysics",
                "Computational Modeling",
                "Embedded Systems & IoT",
                "Robotics & Automation",
                "Biomedical Device Development",
                "Signal Processing",
                "Biomedical Imaging",
              ]}
            />
            <SkillCard
              title="Office & Development"
              skills={[
                "MS Office Suite",
                "CodeBlocks",
                "Arduino IDE",
                "Keil",
                "Cisco Packet Tracer",
                "Windows OS",
              ]}
            />
            <SkillCard
              title="Soft Skills"
              skills={[
                "Project Management",
                "Event Management",
                "Leadership",
                "Presentation",
                "Technical Writing",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Achievements
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <AchievementCard text="Eligible for Khondkar Lutfi Rabbani-Nazmun Nesa Memorial Scholarship	 for being the 1st of the department in M.S." />
            <AchievementCard text="Bronze Honour in International Youth Math Challenge (IYMC) – 2024 (Top 15%)" />
            <AchievementCard text="Prototype development for IoT based Gas Burner Monitoring with Spectrum Engineering Consortium Ltd. (2024)" />
            <AchievementCard text="Selected among top three poem writers at BUET Literature Fest (2024)" />
            <AchievementCard text="Emerging Instructor of Content Academics, 10 Minute School (May 2023)" />
            <AchievementCard text="Semifinalist (Team Phoenix), HULT PRIZE at BUET-2021" />
            <AchievementCard text="Top-30 teams Phase-I (Team Digifarm), HULT PRIZE at BUET-2020" />
            <AchievementCard text="2nd Runner-up at Bangladesh Biology Olympiad (BDBO) – Regional, Dhaka South (2017)" />
            <AchievementCard text="Best Speaker at Beijing Education Exchange Program 2016 by BDCN Foundation" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-blue-600 to-blue-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
            Get In Touch
          </h2>
          <p className="text-center text-blue-100 mb-12 text-lg">
            Feel free to reach out for collaborations, opportunities, or just a
            friendly chat!
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Email</p>
                    <a
                      href="mailto:emazeeebuet83@gmail.com"
                      className="text-gray-800 hover:text-blue-600 transition-colors font-semibold"
                    >
                      emazeeebuet83@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Phone</p>
                    <a
                      href="tel:+8801840903757"
                      className="text-gray-800 hover:text-blue-600 transition-colors font-semibold"
                    >
                      +880 1840-903757
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">
                      Location
                    </p>
                    <p className="text-gray-800 font-semibold">
                      18/3 Nayapaltan, Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">
                      LinkedIn
                    </p>
                    <a
                      href="https://linkedin.com/in/mdemazuddin"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-blue-600 transition-colors font-semibold"
                    >
                      linkedin.com/in/mdemazuddin
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="rounded-2xl p-8 border-2 border-white">
                <p className="text-white text-lg mb-4 font-semibold">
                  Let's connect and create something amazing together!
                </p>
                <p className="text-white text-opacity-90">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Mohammad Emaz Uddin. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

// Component definitions
const EducationCard = ({ degree, institution, period, details, thesis }) => (
  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
    <div className="flex items-start gap-4">
      <GraduationCap className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{degree}</h3>
        <p className="text-gray-600 font-medium mb-2">{institution}</p>
        <p className="text-sm text-gray-500 mb-2">{period}</p>
        <p className="text-gray-700">{details}</p>
        {thesis && (
          <p className="text-sm text-gray-600 mt-2 italic">Thesis: {thesis}</p>
        )}
      </div>
    </div>
  </div>
);

const ResearchCard = ({ title, type, status, link, blue }) => (
  <div
    className={`rounded-lg p-6 border-l-4 ${
      blue ? "bg-blue-50 border-blue-600" : "bg-gray-50 border-green-600"
    }`}
  >
    <div className="flex items-start gap-4">
      <Lightbulb
        className={`w-6 h-6 flex-shrink-0 mt-1 ${
          blue ? "text-blue-600" : "text-green-600"
        }`}
      />
      <div className="flex-1">
        <h4 className="font-semibold text-gray-800 mb-1">{title}</h4>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline break-all"
          >
            (DOI Link: {link})
          </a>
        )}
        {type && (
          <span className="text-sm text-green-600 font-medium">{type}</span>
        )}
        {status && (
          <span className="text-sm text-orange-600 font-medium ml-2">
            ({status})
          </span>
        )}
      </div>
    </div>
  </div>
);

const ProjectCard = ({ title, description }) => (
  <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-purple-600">
    <div className="flex items-start gap-4">
      <Code className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
      <div className="flex-1">
        <h4 className="font-semibold text-gray-800 mb-2">{title}</h4>
        {description && <p className="text-sm text-gray-600">{description}</p>}
      </div>
    </div>
  </div>
);

const AcademicProjectCard = ({ title, year, lab, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
    <div className="flex items-start justify-between mb-3">
      <h4 className="font-semibold text-gray-800 flex-1">{title}</h4>
      <span className="text-sm text-blue-600 font-medium ml-2">{year}</span>
    </div>
    <p className="text-sm text-gray-500 mb-3 italic">{lab}</p>
    <p className="text-gray-700 text-sm">{description}</p>
  </div>
);

const ExperienceCard = ({ title, company, period, icon }) => (
  <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-600">
    <div className="flex items-start gap-4">
      <div className="text-blue-600 flex-shrink-0 mt-1">{icon}</div>
      <div className="flex-1">
        <h4 className="text-lg font-semibold text-gray-800 mb-1">{title}</h4>
        <p className="text-gray-600 font-medium mb-1">{company}</p>
        <p className="text-sm text-gray-500">{period}</p>
      </div>
    </div>
  </div>
);

const SkillCard = ({ title, skills }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h4 className="text-lg font-semibold text-gray-800 mb-4">{title}</h4>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const AchievementCard = ({ text }) => (
  <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-yellow-500">
    <div className="flex items-start gap-3">
      <Award className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
      <p className="text-gray-700">{text}</p>
    </div>
  </div>
);

const ContactInfo = ({ icon, label, value, href }) => (
  <div className="flex items-center gap-4">
    <div className="text-white">{icon}</div>
    <div className="flex-1">
      <p className="text-sm text-blue-200">{label}</p>
      {href ? (
        <a
          href={href}
          className="text-white hover:text-blue-200 transition-colors"
        >
          {value}
        </a>
      ) : (
        <p className="text-white">{value}</p>
      )}
    </div>
  </div>
);

const ReferenceCard = ({ name, title, relation, email, phone }) => (
  <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 text-left">
    <h4 className="font-semibold text-lg mb-2">{name}</h4>
    <p className="text-sm text-blue-200 mb-1">{title}</p>
    <p className="text-sm text-blue-200 mb-3 italic">{relation}</p>
    <p className="text-sm mb-1">{email}</p>
    <p className="text-sm">{phone}</p>
  </div>
);

export default Portfolio;
