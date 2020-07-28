import React from 'react';
import {
  StatsDiv, StatDiv,
  ColoredH3, 
  ColoredNum, VerticalLine, NumsDiv,
  StyledP,
} from '../styled';
import CountDiv from './CountDiv';
import {
  malePatientsSVG, malePatientsSVGYellow,
  femalePatientsSVG, femalePatientsSVGYellow,
} from '../Images';

export default () => {
  return (
    <StatsDiv>
      <StatDiv>
        <ColoredH3>New Registration</ColoredH3>
        <NumsDiv>
          <CountDiv num={250} image={malePatientsSVG} />
          <CountDiv num={250} image={femalePatientsSVG} />
        </NumsDiv>
        <StyledP>500</StyledP>
      </StatDiv>
      <StatDiv>
        <ColoredH3>Total Patients</ColoredH3>
        <NumsDiv>
          <CountDiv num={330} image={malePatientsSVGYellow} />
          <CountDiv num={340} image={femalePatientsSVGYellow} />
        </NumsDiv>
        <StyledP>670</StyledP>
      </StatDiv>
      <StatDiv>
        <ColoredH3>Follow up</ColoredH3>
        <NumsDiv>
          <ColoredNum color="#18bfa5">2.6$</ColoredNum>
          <VerticalLine />
          <ColoredNum color="#aaa">65%</ColoredNum>
        </NumsDiv>
      </StatDiv>
      <StatDiv>
        <ColoredH3>Cash Income</ColoredH3>
        <NumsDiv>
          <ColoredNum color="#28a5f0">130$</ColoredNum>
          <VerticalLine />
          <ColoredNum color="#aaa">65%</ColoredNum>
        </NumsDiv>
      </StatDiv>
      <StatDiv>
        <ColoredH3>Credit Income</ColoredH3>
        <NumsDiv>
          <ColoredNum color="#ebb74e">30$</ColoredNum>
          <VerticalLine />
          <ColoredNum color="#aaa">15%</ColoredNum>
        </NumsDiv>
      </StatDiv>
    </StatsDiv>
  )
}