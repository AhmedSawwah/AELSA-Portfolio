import { useState } from "react";

const baseUrl = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

const CategoryIcons = {
  "Web Development": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-app-window-mac text-[var(--sec)]"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M6 8h.01"/><path d="M10 8h.01"/><path d="M14 8h.01"/></svg>
  ),
  "Mobile Development": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-tablet-smartphone text-[var(--sec)]"><rect width="10" height="14" x="3" y="8" rx="2"/><path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"/><path d="M8 18h.01"/></svg>
  ),
  "UI/UX Design & Prototyping": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-spline-pointer text-[var(--sec)]"><path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"/><path d="M5 17A12 12 0 0 1 17 5"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/></svg>
  ),
};

const RoleLogos: Record<string, { src: string; alt: string }> = {
  "Web Director": {
    src: `${baseUrl}images/asus-logo.png?v=2`,
    alt: "ASUS",
  },
  "Logistics Officer": {
    src: `${baseUrl}images/qhacks-logo.png?v=1`,
    alt: "QHacks",
  },
  "Club President": {
    src: `${baseUrl}images/club-president-logo.png?v=1`,
    alt: "Club President organization",
  },
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Web Director": [
      "Implement website enhancements using Squarespace, HTML, CSS, JavaScript, and jQuery, including customized page layouts and third-party form integrations.",
      "Collaborate with a Co-Director and leaders across eight ASUS offices and commissions to publish accurate academic resources, financial information, event schedules, reports, and student-support content for 13,000+ students.",
      "Administer the TriHire recruitment platform to publish available positions, manage applications, and streamline student hiring processes.",
      "Optimize site navigation, search functionality, mobile responsiveness, and accessibility while troubleshooting technical issues and responding to website requests from ASUS teams.",
    ],
    "Logistics Officer": [
      "Served as Logistics Officer for QHacks, Queen’s University’s annual hackathon, supporting the planning and execution of its 11th edition with approximately 250 hackers.",
      "Coordinated venue-related paperwork, event setup, meal logistics, sponsors and day-of operations to ensure the 3-day hackathon ran smoothly.",
      "Worked with the organizing team to manage event flow, resolve logistical issues in real time, and support a positive experience for participants, organizers, and guests.",
    ],
    "Club President": [
      "Led the club’s flagship project, developing a web platform for Grades 9–12 students to select their grade level and enrolled courses to view personalized AMS and Periodic exam schedules, including test dates and times.",
      "Built the platform using HTML, CSS, JavaScript, and a Flask/Python backend, with a lightweight SQLite database to store and update course and exam schedule data.",
      "Created a simple admin dashboard for updating AMS and Periodic schedules, helping centralize exam information and reduce scheduling confusion for students.",
      "Collaborated with the school’s IT department to provide on-call technical support for the ITL (institution’s test-taking system), troubleshooting issues in real time during exam periods.",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[#58b368] text-2xl md:text-3xl font-semibold md:mb-6">
        My Experience:
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {RoleLogos[category] ? (
                  <img
                    src={RoleLogos[category].src}
                    alt={RoleLogos[category].alt}
                    className="w-12 h-9 object-contain flex-shrink-0"
                  />
                ) : (
                  CategoryIcons[category as keyof typeof CategoryIcons]
                )}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[1200px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
                {category === "Web Director" && (
                  <a
                    href="https://www.queensasus.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    className="mt-4 flex items-center justify-between gap-3 rounded-lg border border-[#00ff4166] bg-[#00ff4114] px-3 py-2.5 text-[#00ff41] transition-colors hover:border-[#00ff41b3] hover:bg-[#00ff4124]"
                    aria-label="Visit the ASUS website in a new tab"
                  >
                    <span className="flex min-w-0 items-center gap-2.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className="flex-shrink-0"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M2 12h20" />
                        <path d="M12 2a15.3 15.3 0 0 1 0 20" />
                        <path d="M12 2a15.3 15.3 0 0 0 0 20" />
                      </svg>
                      <span className="min-w-0">
                        <span className="block text-sm font-medium">
                          Visit ASUS Website
                        </span>
                        <span className="block truncate text-xs text-[var(--white-icon)]">
                          queensasus.com
                        </span>
                      </span>
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="flex-shrink-0"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </a>
                )}
                {category === "Logistics Officer" && (
                  <a
                    href="https://capturedbyash10.pixieset.com/qhacksday01/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    className="mt-4 flex items-center justify-between gap-3 rounded-lg border border-[#00ff4166] bg-[#00ff4114] px-3 py-2.5 text-[#00ff41] transition-colors hover:border-[#00ff41b3] hover:bg-[#00ff4124]"
                    aria-label="View QHacks photo gallery in a new tab"
                  >
                    <span className="flex items-center gap-2.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className="flex-shrink-0"
                      >
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <circle cx="9" cy="9" r="2" />
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                      </svg>
                      <span className="text-sm font-medium">
                        View QHacks Gallery
                      </span>
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="flex-shrink-0"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
