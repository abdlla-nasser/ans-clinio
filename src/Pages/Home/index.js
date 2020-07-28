import React, { useState } from 'react';
import { Radio, DatePicker } from 'antd';
import { NavUl, ColoredH2, ImgsContainer } from './styled';
import NavLi from './Partials/NavLi';
import Stats from './Partials/Stats';
import {
  PatientRegistraionImage,
  BookingImage,
  ConsultationImage,
  CashReceiptImage,
  DocumentScanImage,
  medicalRecordImage,
  image1, image2, image3
} from './Images';

const { RangePicker } = DatePicker
const links = [
  { imageSrc: PatientRegistraionImage, to: "/patientregistration", text: 'Patient Registration' },
  { imageSrc: BookingImage, to: "/booking", text: 'Booking' },
  { imageSrc: ConsultationImage, to: "/patientregistration", text: 'Consultation' },
  { imageSrc: CashReceiptImage, to: "/patientregistration", text: 'Cash Receipt' },
  { imageSrc: DocumentScanImage, to: "/patientregistration", text: 'Document Scan' },
  { imageSrc: medicalRecordImage, to: "/patientregistration", text: 'Medical Record' },
]

export default () => {
  const [filterValue, setFilterValue] = useState({
    date: "today",
    customRange: null
  });
  return (
    <>
      <NavUl>
        {links.map((link) => (
          <NavLi key={link.text} imageSrc={link.imageSrc} to={link.to}>{link.text}</NavLi>
        ))}
      </NavUl>
      <div style={{ padding: '1rem 0'}}>
        <Radio.Group defaultValue={filterValue.date} buttonStyle="solid" onChange={(e) => {
          setFilterValue({...filterValue, date: e.target.value })
        }}>
          <Radio.Button value="today">Today</Radio.Button>
          <Radio.Button value="yesterday">Yesterday</Radio.Button>
          <Radio.Button value="lastweek">Last Week</Radio.Button>
          <Radio.Button value="lastmonth">Last Month</Radio.Button>
          <Radio.Button value="thismonth">This Month</Radio.Button>
          <Radio.Button value="lastyear">Last Year</Radio.Button>
          <RangePicker  onOpenChange={(e) => {
            setFilterValue({ date: null, customRange: true })
          }} onChange={(e) => {
            setFilterValue({ date: e, customRange: true })
          }}/>
        </Radio.Group>
      </div>
      <Stats />
      <ImgsContainer>
          <img src={image1} alt=""/>
          <img src={image2} alt=""/>
          <img src={image3} alt=""/>
      </ImgsContainer>
    </>
  )
}