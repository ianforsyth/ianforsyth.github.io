import Layout from '../components/Layout'

type LineItemProps = {
  title?: string,
  description: string,
  subtext?: string,
  location?: string,
  date?: string,
}

const workExperience: LineItemProps[] = [{
  title: "Team Engine",
  description: "HR automation platform that helps blue-collar companies grow and engage their deskless workforces. Joined during the seed stage and work on a team of three doing design, product, customer success, and engineering. Built texting platform integrated with Twilio requiring new architecture, failover, and redundancy. Developed hiring practices to grow the engineering team.",
  location: "Boulder, CO",
  date: "May 2019 - present"
}, {
  title: "VTS",
  description: "The #1 platform for commercial real estate leasing and asset management. Saw the company grow from 30 to 250+. Ran teams as tech lead, developed go-to market strategies for new product lines, participated in product UI/UX reviews, interviewed engineering and product manager candidates, and mentored engineering apprentices.",
  location: "New York, NY",
  date: "June 2014 - May 2019"
}, {
  title: "Freelance",
  description: "Personal side business designing and building websites and (formerly) iOS apps. Attract clients through referrals, decide on project direction and strategy, write formal scopes of work, and handle invoicing.",
  date: "April 2013 - present"
}, {
  title: "Quinlan",
  description: "Working stint during a gap year. Web and mobile developer. Partnered with one other developer in a LAMP environment creating websites and data-driven applications. Built, maintained, and redesigned award winning iOS applications.",
  location: "Amherst, NY",
  date: "May - December 2013"
}]

const projects: LineItemProps[] = [{
  title: "PR Patrol",
  description: "Side project GitHub app with ~150 users that lets users monitor pull requests and get alerted when specific changes are proposed. Responsible for all parts of the development process from design to architecture to marketing. Built with React frontend, Ruby API backend and integrated with GitHub, SendGrid, and Slack APIs.",
  date: "March 2018 - present"
}]

const skills: LineItemProps[] = [{
  title: "Technologies",
  description: "Ruby/Rails, Javascript (Express, React), C++, PostgreSQL, MySQL, Redis, CSS/Sass, Git, Heroku, AWS CI/CD, AWS Lambda, CSS/Sass, Figma, Vim",
}, {
  title: "People",
  description: "Engineering team lead, interfacing with product/design/sales/marketing, roadmap planning, peer and direct report reviews, interviewing, user research",
}]

const education: LineItemProps[] = [{
  title: "Yale University",
  description: "B.S. Computer Science",
  subtext: "Coursework: Multivariable Calculus, Data Structures, Data Mining, Databases, Object-Oriented Programming, Design and Analysis of Algorithms, Computer Graphics, The Graphical User Interface",
  date: "Graduated 2014",
}, {
  title: "Rhode Island School of Design",
  description: "Summer session course: Web Design",
  date: "Summer 2013",
}]

const other: LineItemProps[] = [{
  description: "Running, cycling, skiing, rowing, woodworking, cooking, chess",
}]

const LineItem = ({ title, description, subtext, location, date, type }: LineItemProps & { type?: string }) => (
  <div className="font-light first:mt-0 mt-4 flex" style={{ fontSize: "10pt" }}>
    <div className="text-right" style={{ width: "1.5in", paddingRight: "0.25in" }}>{type}</div>
    <div className="col-span-3" style={{ width: "5.5in" }}>
      {title && <span className="font-semibold">{title}: </span>}
      <span>{description}</span>
      <div style={{ fontSize: "8pt" }}>{subtext}</div>
    </div>
    <div className="text-right" style={{ width: "1in" }}>
      {location && <div style={{ fontSize: "6pt" }}>{location}</div>}
      {date && <div style={{ fontSize: "6pt" }}>{date}</div>}
    </div>
  </div>
)

const ResumePage = () => (
  <Layout title="Resume">
    <div className="font-lato flex justify-center leading-tight" style={{ background: "#C5C5C5", padding: '0.5in' }}>
      <div style={{ height: '11in', width: '8.5in', background: "#FFFFFF" }}>
        <div className="flex justify-between w-full" style={{ color: "white", background: "#072743", padding: "0.5in" }}>
          <div>
            <div className="text-5xl mb-2">Ian Forsyth</div>
            <div style={{ fontSize: '10pt' }}>
              <div>ian@ianforsyth.com</div>
              <div>(716) 870-5571</div>
              <div>Boulder, CO 80302</div>
            </div>
          </div>
          <div style={{ fontSize: '10pt', width: '350px' }}>
            <div className="mb-3 mt-2" style={{ fontSize: '11pt' }}>Please feel free to explore beyond my resume, get to know me, and see samples of my work here:</div>
            Website: <a className="font-light" href="https://ianforsyth.com" target="_blank" rel="noopener noreferrer">ianforsyth.com</a><br />
            Github: <a className="font-light" href="https://github.com/ianforsyth" target="_blank" rel="noopener noreferrer">ianforsyth</a><br />
            Dribbble: <a className="font-light" href="https://dribbble.com/ianforsyth" target="_blank" rel="noopener noreferrer">ianforsyth</a><br />
            Medium: <a className="font-light" href="https://medium.com/@ianforsyth" target="_blank" rel="noopener noreferrer">ianforsyth</a><br />
          </div>
        </div>
        <div style={{ padding: "0.25in" }}>
          {workExperience.map((w, i) => <LineItem {...w} type={i === 0 ? "Work Experience" : undefined} />)}
          {projects.map((p, i) => <LineItem {...p} type={i === 0 ? "Projects" : undefined} />)}
          {skills.map((s, i) => <LineItem {...s} type={i === 0 ? "Skills" : undefined} />)}
          {education.map((e, i) => <LineItem {...e} type={i === 0 ? "Education" : undefined} />)}
          {other.map((o, i) => <LineItem {...o} type={i === 0 ? "Other Interests" : undefined} />)}
        </div>
      </div>
    </div>
  </Layout>
)

export default ResumePage
