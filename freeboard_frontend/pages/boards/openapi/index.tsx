import { useState, useEffect } from "react";
import axios from "axios";

export default function TeamInfo() {
  const [team, setTeam] = useState<string[]>([]);

  useEffect(() => {
    const TeamInfo = async () => {
      const result: any = await axios.get(
        "https://www.balldontlie.io/api/v1/teams"
      );
      console.log(result);
      setTeam(result.data.data);
    };
    TeamInfo();
  }, []);

  return (
    <>
      {team.map((el: any) => (
        <div key={el.id}>
          <div>{el.abbreviation}</div>
          <div>{el.city}</div>
          <div>{el.conference}</div>
          <div>{el.division}</div>
          <div>{el.full_name}</div>
          <div>{el.name}</div>
        </div>
      ))}
      <div></div>
    </>
  );
}
