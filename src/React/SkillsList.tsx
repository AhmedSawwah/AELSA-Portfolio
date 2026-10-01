const baseUrl = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

const experiences = [
  {
    role: "Web Director",
    date: "Sep 2025 - Apr 2026",
    link: {
      href: "https://www.queensasus.com/",
      label: "Website",
      ariaLabel: "Visit the ASUS website",
    },
    organization: "Arts and Science Undergraduate Society (ASUS)",
    logo: {
      src: `${baseUrl}images/asus-logo.png?v=2`,
      alt: "ASUS logo",
    },
    highlights: [
      "Implement website enhancements using Squarespace, HTML, CSS, JavaScript, and jQuery, including customized page layouts and third-party form integrations.",
      "Collaborate with a Co-Director and leaders across eight ASUS offices and commissions to publish accurate academic resources, financial information, event schedules, reports, and student-support content for 13,000+ students.",
      "Administer the TriHire recruitment platform to publish available positions, manage applications, and streamline student hiring processes.",
      "Optimize site navigation, search functionality, mobile responsiveness, and accessibility while troubleshooting technical issues and responding to website requests from ASUS teams.",
    ],
  },
  {
    role: "Logistics Officer",
    date: "Sep 2025 - Feb 2026",
    link: {
      href: "https://capturedbyash10.pixieset.com/qhacksday01/",
      label: "Gallery",
      ariaLabel: "View the QHacks photo gallery",
    },
    organization: "QHacks | Queen's University",
    logo: {
      src: `${baseUrl}images/qhacks-logo.png?v=1`,
      alt: "QHacks logo",
    },
    highlights: [
      "Served as Logistics Officer for QHacks, Queen's University's annual hackathon, supporting the planning and execution of its 11th edition with approximately 250 hackers.",
      "Coordinated venue-related paperwork, event setup, meal logistics, sponsors, and day-of operations to ensure the three-day hackathon ran smoothly.",
      "Worked with the organizing team to manage event flow, resolve logistical issues in real time, and support a positive experience for participants, organizers, and guests.",
    ],
  },
  {
    role: "Tech Club President",
    date: "Sep 2023 - May 2024",
    link: null,
    organization: "SABIS",
    logo: {
      src: `${baseUrl}images/club-president-logo.png?v=1`,
      alt: "SABIS logo",
    },
    highlights: [
      "Led the club's flagship project, developing a web platform for Grades 9-12 students to select their grade level and enrolled courses to view personalized AMS and Periodic exam schedules, including test dates and times.",
      "Built the platform using HTML, CSS, JavaScript, and a Flask/Python backend, with a lightweight SQLite database to store and update course and exam schedule data.",
      "Created a simple admin dashboard for updating AMS and Periodic schedules, helping centralize exam information and reduce scheduling confusion for students.",
      "Collaborated with the school's IT department to provide on-call technical support for the ITL (institution's test-taking system), troubleshooting issues in real time during exam periods.",
    ],
  },
];

const SkillsList = () => {
  return (
    <section className="portfolio-experience" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="portfolio-experience__title">
        Experience
      </h2>

      <div className="portfolio-experience__grid">
        {experiences.map((experience) => (
          <article
            key={experience.role}
            className="portfolio-experience__card"
            tabIndex={0}
          >
            <div className="portfolio-experience__logo">
              <img src={experience.logo.src} alt={experience.logo.alt} />
            </div>

            <div className="portfolio-experience__header">
              <h3>{experience.role}</h3>
              <div className="portfolio-experience__meta">
                <span className="portfolio-experience__date">
                  {experience.date}
                </span>
                {experience.link && (
                  <a
                    className="portfolio-experience__link"
                    href={experience.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={experience.link.ariaLabel}
                  >
                    <span>{experience.link.label}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </a>
                )}
              </div>
            </div>

            <p className="portfolio-experience__company">
              {experience.organization}
            </p>

            <ul className="portfolio-experience__highlights">
              {experience.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap");

        .portfolio-experience,
        .portfolio-experience * {
          font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .portfolio-experience {
          width: 100%;
          color: #f4efe7;
        }

        .portfolio-experience__title {
          margin: 0 0 32px;
          color: #f4efe7;
          font-size: clamp(2rem, 4vw, 2.65rem);
          font-weight: 600;
          line-height: 1;
          letter-spacing: 0;
        }

        .portfolio-experience__grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          align-items: stretch;
          gap: 22px;
        }

        .portfolio-experience__card {
          position: relative;
          min-width: 0;
          overflow: hidden;
          padding: 22px;
          border: 1px solid #3a352d;
          border-left: 4px solid #aaa49b;
          border-radius: 20px;
          outline: none;
          background: linear-gradient(135deg, #1d1d1d 0%, #202020 100%);
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.18);
          transition:
            transform 350ms cubic-bezier(0.4, 0, 0.2, 1),
            border-color 350ms cubic-bezier(0.4, 0, 0.2, 1),
            box-shadow 350ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .portfolio-experience__card:hover,
        .portfolio-experience__card:focus-visible {
          z-index: 1;
          border-color: #8d877e;
          transform: translateY(-8px);
          box-shadow:
            0 24px 64px rgba(0, 0, 0, 0.38),
            0 0 0 1px #5b554d;
        }

        .portfolio-experience__card:focus-visible {
          outline: 2px solid #f3e7d1;
          outline-offset: 4px;
        }

        .portfolio-experience__logo {
          position: relative;
          display: grid;
          width: 64px;
          height: 64px;
          margin-bottom: 18px;
          overflow: hidden;
          place-items: center;
          border: 2px solid #3a352d;
          border-radius: 16px;
          background: linear-gradient(135deg, #222222 0%, #2a2927 100%);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.24);
          transition:
            transform 400ms cubic-bezier(0.4, 0, 0.2, 1),
            border-color 400ms cubic-bezier(0.4, 0, 0.2, 1),
            background 400ms cubic-bezier(0.4, 0, 0.2, 1),
            box-shadow 400ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .portfolio-experience__logo::before {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.15),
            transparent
          );
          content: "";
          transition: left 500ms ease;
        }

        .portfolio-experience__card:hover .portfolio-experience__logo::before,
        .portfolio-experience__card:focus-visible .portfolio-experience__logo::before {
          left: 100%;
        }

        .portfolio-experience__card:hover .portfolio-experience__logo,
        .portfolio-experience__card:focus-visible .portfolio-experience__logo {
          border-color: #827b72;
          background: linear-gradient(135deg, #3f3b35 0%, #35322e 100%);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.34);
          transform: scale(1.1) rotate(5deg);
        }

        .portfolio-experience__logo img {
          position: relative;
          z-index: 1;
          width: 80%;
          height: 80%;
          object-fit: contain;
        }

        .portfolio-experience__header {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: space-between;
          gap: 10px 12px;
          margin-bottom: 10px;
        }

        .portfolio-experience__header h3 {
          flex: 1 1 190px;
          min-width: 0;
          margin: 0;
          color: #f4efe7;
          font-size: 1.18rem;
          font-weight: 800;
          line-height: 1.25;
          letter-spacing: 0;
          overflow-wrap: break-word;
        }

        .portfolio-experience__meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: flex-end;
          gap: 8px;
        }

        .portfolio-experience__date {
          flex-shrink: 0;
          margin-top: 2px;
          padding: 6px 12px;
          border-radius: 10px;
          color: #f4efe7;
          background: linear-gradient(135deg, #302f2d 0%, #252525 100%);
          box-shadow:
            0 2px 8px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
          font-size: 0.68rem;
          font-weight: 800;
          line-height: 1.65;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          white-space: nowrap;
          transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .portfolio-experience__card:hover .portfolio-experience__date,
        .portfolio-experience__card:focus-visible .portfolio-experience__date {
          transform: translateY(-2px) scale(1.05);
        }

        .portfolio-experience__link {
          display: inline-flex;
          flex-shrink: 0;
          align-items: center;
          gap: 5px;
          margin-top: 2px;
          padding: 6px 10px;
          border: 1px solid #5b554d;
          border-radius: 10px;
          color: #f4efe7;
          background: #242321;
          box-shadow:
            0 2px 8px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.06);
          font-size: 0.68rem;
          font-weight: 800;
          line-height: 1.65;
          letter-spacing: 0.05em;
          text-decoration: none;
          text-transform: uppercase;
          white-space: nowrap;
          transition:
            color 250ms ease,
            border-color 250ms ease,
            background 250ms ease,
            transform 250ms ease;
        }

        .portfolio-experience__link svg {
          color: #73c982;
          transition: color 250ms ease;
        }

        .portfolio-experience__link:hover svg,
        .portfolio-experience__link:focus-visible svg {
          color: #9ae5a7;
        }

        .portfolio-experience__link:hover,
        .portfolio-experience__link:focus-visible {
          border-color: #aaa49b;
          outline: none;
          color: #131313;
          background: #f3e7d1;
          transform: translateY(-2px);
        }

        .portfolio-experience__company {
          margin: 10px 0 12px;
          color: #f4efe7;
          font-size: 0.98rem;
          font-weight: 800;
          line-height: 1.3;
          letter-spacing: 0;
          opacity: 0.95;
        }

        .portfolio-experience__highlights {
          margin: 0;
          padding-left: 30px;
          color: #c7bfb3;
          font-size: 0.92rem;
          line-height: 1.7;
          letter-spacing: 0;
          list-style-position: outside;
          list-style-type: disc;
          transition: color 300ms ease;
        }

        .portfolio-experience__highlights li {
          padding-left: 6px;
        }

        .portfolio-experience__highlights li::marker {
          color: #f4efe7;
          font-size: 0.82em;
        }

        .portfolio-experience__highlights li + li {
          margin-top: 10px;
        }

        .portfolio-experience__card:hover .portfolio-experience__highlights,
        .portfolio-experience__card:focus-visible .portfolio-experience__highlights {
          color: #e0d8cc;
        }

        @media (max-width: 1050px) {
          .portfolio-experience__grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 700px) {
          .portfolio-experience__title {
            margin-bottom: 24px;
          }

          .portfolio-experience__grid {
            grid-template-columns: 1fr;
          }

          .portfolio-experience__card {
            padding: 20px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .portfolio-experience__card,
          .portfolio-experience__logo,
          .portfolio-experience__logo::before,
          .portfolio-experience__date,
          .portfolio-experience__link,
          .portfolio-experience__highlights {
            transition: none;
          }

          .portfolio-experience__card:hover,
          .portfolio-experience__card:focus-visible,
          .portfolio-experience__card:hover .portfolio-experience__logo,
          .portfolio-experience__card:focus-visible .portfolio-experience__logo,
          .portfolio-experience__card:hover .portfolio-experience__date,
          .portfolio-experience__card:focus-visible .portfolio-experience__date,
          .portfolio-experience__link:hover,
          .portfolio-experience__link:focus-visible {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsList;
