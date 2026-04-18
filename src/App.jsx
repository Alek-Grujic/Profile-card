const skillList = [
  {
    name: "HTML+CSS",
    level: "advenced",
    color: "#2457E4",
  },
  {
    name: "JavaScript",
    level: "advenced",
    color: "#EBD317",
  },
  {
    name: "Web Design",
    level: "advenced",
    color: "#B9D7A3",
  },
  {
    name: "Git and GitHub",
    level: "intermediate",
    color: "#E3462D",
  },
  {
    name: "React",
    level: "advenced",
    color: "#53D4F7",
  },
  {
    name: "Svelte",
    level: "beginner",
    color: "#FD3200",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="avatarWrapper">
      <img src="./public/prof.png" alt="#" className="avatar" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Jonas Schmedtmann</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure soluta
        neque aliquid dignissimos animi voluptates natus culpa? Temporibus,
        veniam neque, officia totam.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      {skillList.map((skill) => (
        <Skill
          key={skill.name}
          // name={skill.name}
          // emoji={skill.emoji}
          // color={skill.color}
          skillObj={skill}
        />
      ))}
    </ul>
  );
}

function Skill({ skillObj }) {
  return (
    <li style={{ background: skillObj.color }} className="skill">
      {`${skillObj.name} `}

      {skillObj.level === "advenced" && "💪"}
      {skillObj.level === "intermediate" && "👍"}
      {skillObj.level === "beginner" && "👶"}
    </li>
  );
}

export default App;
