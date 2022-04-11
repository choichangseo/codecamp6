import { useState, useEffect } from "react";
import axios from "axios";
import styled from "@emotion/styled";

const Wrapper = styled.span`
  display: flex;
  flex-direction: row;
`;
const TeamName = styled.div``;

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
    <Wrapper>
      {team.map((el: any, index: number) => (
        <div key={el.index}>
          {(index + 1) % 5 === 0 && <br />}
          <TeamName>
            {el.full_name}
            <br />
            {el.conference}
            <br />
            {el.division}
            <br />
            {el.abbreviation}
            <br />
            {el.city}
          </TeamName>
        </div>
      ))}
    </Wrapper>
  );
}
