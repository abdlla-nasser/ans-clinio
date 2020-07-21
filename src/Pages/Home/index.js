import React from 'react';
import { NavUl, StatsDiv, StatDiv, ColoredH3, ColoredH2, ColoredNum, VerticalLine, NumsDiv, StatDivider, ImgsContainer } from './styled';
import { NavLi, CountDiv } from './Partials';
import {
  PatientRegistraionImage,
  BookingImage,
  ConsultationImage,
  CashReceiptImage,
  DocumentScanImage,
  medicalRecordImage,
  malePatientsSVG, malePatientsSVGYellow,
  femalePatientsSVG, femalePatientsSVGYellow,
  image1, image2, image3
} from './Images';

const links = [
  { imageSrc: PatientRegistraionImage, to: "/patientregistration", text: 'Patient Registration' },
  { imageSrc: BookingImage, to: "/booking", text: 'Booking' },
  { imageSrc: ConsultationImage, to: "/patientregistration", text: 'Consultation' },
  { imageSrc: CashReceiptImage, to: "/patientregistration", text: 'Cash Receipt' },
  { imageSrc: DocumentScanImage, to: "/patientregistration", text: 'Document Scan' },
  { imageSrc: medicalRecordImage, to: "/patientregistration", text: 'Medical Record' },
]

export default () => {
  return (
    <>
      <NavUl>
        {links.map((link) => (
          <NavLi key={link.text} imageSrc={link.imageSrc} to={link.to}>{link.text}</NavLi>
        ))}
      </NavUl>
      <div>
        <ColoredH2>Feature Service Info</ColoredH2>

      </div>
      <StatsDiv>
        <StatDiv>
          <ColoredH3>New Registration</ColoredH3>
          <NumsDiv>
            <CountDiv num={250} image={malePatientsSVG} />
            <CountDiv num={250} image={femalePatientsSVG} />
          </NumsDiv>
          <p>500</p>
        </StatDiv>
        <StatDivider />
        <StatDiv>
          <ColoredH3>Total Patients</ColoredH3>
          <NumsDiv>
            <CountDiv size={40} num={330} image={malePatientsSVGYellow} />
            <CountDiv size={40} num={340} image={femalePatientsSVGYellow} />
          </NumsDiv>
          <p>670</p>
        </StatDiv>
        <StatDivider />
        <StatDiv>
          <ColoredH3>Follow up</ColoredH3>
          <NumsDiv>
            <ColoredNum color="#18bfa5">2.6$</ColoredNum>
            <VerticalLine />
            <ColoredNum color="#aaa">65%</ColoredNum>
          </NumsDiv>
        </StatDiv>
        <StatDivider />
        <StatDiv>
          <ColoredH3>Cash Income</ColoredH3>
          <NumsDiv>
            <ColoredNum color="#28a5f0">130$</ColoredNum>
            <VerticalLine />
            <ColoredNum color="#aaa">65%</ColoredNum>
          </NumsDiv>
        </StatDiv>
        <StatDivider />
        <StatDiv>
          <ColoredH3>Credit Income</ColoredH3>
          <NumsDiv>
            <ColoredNum color="#ebb74e">30$</ColoredNum>
            <VerticalLine />
            <ColoredNum color="#aaa">15%</ColoredNum>
          </NumsDiv>
        </StatDiv>
      </StatsDiv>
      <ImgsContainer>
          <img src={image1} alt=""/>
          <img src={image2} alt=""/>
          <img src={image3} alt=""/>
      </ImgsContainer>
    </>
  )
}