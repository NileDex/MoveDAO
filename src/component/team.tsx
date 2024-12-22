
import './css/team.css';
import joseph from '../assets/joseph.jpg';
import lee from '../assets/lee.png';

const Team = () => {
  const teamMembers = [
    {
      image: joseph,
      name: 'Joseph Sunday (NILEDEX)',
      role: 'CEO',
      description: 'Frontend Dev.',
    },
    {
      image: lee,
      name: 'Urs Lee | INTEGRATED 🦍⚡',
      role: 'CTO',
      description: 'Blockchain Dev GorillaMovers Devrel',
    },
  ];

  return (
    <div className="team-section">
      <h1 className="team-title">Meet the Team</h1>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.image} alt={member.name} className="team-image" />
            <div className="team-info">
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-description">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
