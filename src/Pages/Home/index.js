import React from 'react';
import { NavUl, StatsDiv, StatDiv, ColoredH3, ColoredNum, VerticalLine, NumsDiv, StatDivider, ImgsContainer } from './styled';
import { NavLi, CountDiv } from './Partials';
import PatientRegistraionImage from '../../assets/images/layer-3@3x.jpg'
import BookingImage from '../../assets/images/layer-5@3x.jpg';
import ConsultationImage from '../../assets/images/layer-7@3x.jpg';
import CashReceiptImage from '../../assets/images/layer-8@3x.jpg';
import DocumentScanImage from '../../assets/images/layer-9@3x.jpg';
import medicalRecordImage from '../../assets/images/layer-10@3x.jpg';
import malePatientsSVG from '../../assets/svgs/forma-1.svg';
import femalePatientsSVG from '../../assets/svgs/forma-1_2.svg';
import image1 from '../../assets/images/Capture1.PNG';
import image2 from '../../assets/images/Capture2.PNG';
import image3 from '../../assets/images/Capture3.PNG';

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
            <CountDiv num={330} image={malePatientsSVG} />
            <CountDiv num={340} image={femalePatientsSVG} />
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