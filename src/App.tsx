import React, { useState, useEffect, ReactNode } from "react";
import "./App.css";
import teamsData from "./CollegeBasketballTeams.json";

interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

// function MyComponent() {
//   return (
//     <div>
//       <h1>Teams</h1>

//       <ul>
//         {teamsData.teams.map((team) => (
//           <li key={team.tid}>{team.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

function Welcome() {
  return (
    <div>
      <h1>College Basketball Teams</h1>
      <p>
        This page details every college basketball team competing in March
        Madness! It is designed to help you get a little bit of information
        about each team before making your bracket. Good luck and may the best
        bracket win!
      </p>
    </div>
  );
}

function TextContainer({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        border: "2px solid #ccc", // Border styling
        padding: "20px", // Padding around the content
        borderRadius: "5px", // Rounded corners
        backgroundColor: "#f9f9f9", // Background color
        width: "400px",
        margin: "0 auto",
      }}
    >
      {children}
    </div>
  );
}

class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div>
        <TextContainer>
          <h2>{oneTeam.school}</h2>
          <h3>Mascot: {oneTeam.name}</h3>
          <h3>
            Location: {oneTeam.city}, {oneTeam.state}
          </h3>
        </TextContainer>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {teamsData.teams.map((team) => (
        <Team key={team.tid} {...team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
