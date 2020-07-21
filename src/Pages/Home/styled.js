import styled from 'styled-components';

export const NavUl = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  font-size: 16px;
  color: white;
`
export const Li = styled.li`
  display: flex;
  flex-direction: column-reverse;
  border-radius: 5px;
  width: 185px;
  height: 110px;
  background-image: ${({ imageSrc }) => `linear-gradient(to bottom, rgba(230,230,230,0.5), rgba(0,0,255,0.5)), url(${imageSrc})`};
  background-size: contain;
  background-repeat: no-repeat;
`
export const CenterLink = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`
export const CircleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #326dbb;
  width: ${({size}) => `${size}px`};
  height: ${({size}) => `${size}px`};
  border-radius: 50%;
  color: white;
  font-size: 18px;
  font-weight:500;
`
export const StatsDiv = styled.div`
  margin: 20px auto;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  width: 100%;
  height: 180px;
`
export const StatDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 220px;
  padding: 25px;
  color: #f4516c;
  font-size: 30px;
  font-weight: 500;
  text-align: center;
`
export const ColoredNum = styled.p`
  color: ${({ color }) => color };
  font-size: inherit;
  font-weight: inherit;
  text-align: inherit;
  margin: 0;
`
export const VerticalLine = styled.div`
  margin-top: 7px;
  border-left: 1px solid #aaa;
  height: 30px;
`
export const ColoredH3 = styled.h3`
  color: #546a79;
  font-size: 18px;
  text-align: left;
`
export const ColoredH2 = styled.h2`
  color:#306cbb;
  font-size: 24px;
  font-weight: 500;
`
export const NumsDiv = styled.div`
  display: flex;
  justify-content: space-between;
`
export const StatDivider = styled.div`
  border-left: 1px solid transparent;
  hieght:100%;
  box-shadow: -3px 0 5px #ccc;
`
export const ImgsContainer = styled.div`
  margin: 20px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`