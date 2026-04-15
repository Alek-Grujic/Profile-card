const skillList = [
  {
    name: "HTML+CSS",
    emoji: "💪",
    color: "#2457E4",
  },
  {
    name: "JavaScript",
    emoji: "💪",
    color: "#EBD317",
  },
  {
    name: "Web Design",
    emoji: "💪",
    color: "#B9D7A3",
  },
  {
    name: "Git and GitHub",
    emoji: "👍",
    color: "#E3462D",
  },
  {
    name: "React",
    emoji: "💪",
    color: "#53D4F7",
  },
  {
    name: "Svelte",
    emoji: "👶",
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
          name={skill.name}
          emoji={skill.emoji}
          color={skill.color}
        />
      ))}
    </ul>
  );
}

function Skill(props) {
  return (
    <li style={{ background: props.color }} className="skill">
      {`${props.name} ${props.emoji}`}
    </li>
  );
}

export default App;
