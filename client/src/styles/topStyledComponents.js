import styled, { css } from 'styled-components';

const sources = {
  bellEmpty: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/DingDongEmpty.png',
  bellFull: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/DingDongFull.png',
};

// Entry Styles
const Background = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 1fr;
  background-color: #262b31;
  font-family: 'Sofia Pro Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.85);
  color: white;
  text-align: center;
  -webkit-font-smoothing: antialiased;
`;
const Software = styled.img.attrs({
  src: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/gamesbundle.png',
})`
  grid-column: 2;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  max-height: 80px;
  max-width: 80px;
  opacity: .7;
`;
const Name = styled.h3`
  text-transform: uppercase;
  font-size: 1.35em;
  grid-column: 2;
  margin-left: auto;
  margin-right: auto;
`;
const BundleLogo = styled.div`
  margin-left: auto;
  margin-right: auto;
  height: 120px;
  display: block;
  width: 280px;
  grid-column: 2;
  border-radius: 2%;
  font-family: 'Bodoni';
  font-style: italic;
  font-weight: bold;
  opacity: .4;
  font-size: 27px;
  vertical-align: middle;
  background-size: 150% 150%;
  color: #39FF14;
  text-shadow: 1px 1px coral;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
`;
const Blurb = styled.div`
  font-size: 1.1em;
  line-height: 1.75em;
  color: #d8d8da;
  margin: .75em auto;
  grid-column: 2;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
`;
const Infobar = styled.div`
  font-size: 1.2em;
  grid-column: 2;
  margin-left: auto;
  margin-right: auto;
  font-weight: bold;
  text-transform: uppercase;
`;
const Button = styled.div`
  background-color: #97b147;
  border: 1px solid #97b147;
  border-radius: 0.3em;
  grid-column: 2;
  cursor: pointer;
  margin: 0.75em auto 0;
  padding: 0.8em 1.25em 1em;
  font-size: 1.15em;
  text-rendering: optimizeLegibility;
  font-weight: bold;
  text-decoration: none;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.65);
  text-transform: uppercase;
  transition-duration: 0.2s;
  transition-property: background-color, border, color, box-shadow, text-shadow;
  transition-timing-function: ease-in-out;
  white-space: nowrap;
  &:hover {
    background-color: #879f40;
    border: 1px solid #879f40;
  };
`;
const TimeLeft = styled.div`
  grid-column: 2;
  margin-left: auto;
  margin-right: auto;
  font-size: .8em;
  margin: 1.25em;
  font-weight: bold;
  text-transform: uppercase;
`;
const Bell = styled.div`
  content: url('https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/DingDongEmpty.png');
  max-height: 30px;
  max-width: 30px;
  &:hover {
    content: url('https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/DingDongFull.png');
  };
`;
const Reminder = styled.div`
  grid-column: 2;
  vertical-align: middle;
  font-weight: bold;
  text-transform: uppercase;
`;
const BellWrapper = styled.div`
  grid-column: 2;
  vertical-align: middle;
  margin-left: auto;
  margin-right: auto;
  height: 100px;
  width: 100px;
`;
const Dot = styled.div`
  height: 7px;
  width: 7px;
  background-color: rgba(132, 132, 121, 1);
  border-radius: 50%;
`;

//Clock Styles
const Clock = styled.div`
  grid-column: 2;
  margin-left: auto;
  margin-right: auto;
`;
const Window = styled.div`
  background-color: rgba(10,10,10,0.5);
  color: white;
  justify-content: space-around;
  align-items: center;
  border-radius: 0.2em;
  width: 3em;
  line-height: 1.3;
  margin: 0 0.2em;
  padding: 0.4em 0.15em 0.75em;
  font-size: 0.85em;
  opacity: 0.75;
`;
const Count = styled.div`
  font-weight: bold;
  font-size: 1.75em;
`;

// Modal Styles
const Modal = styled.div`
  margin-left: auto;
  margin-right: auto;
  grid-column: 2;
  width: 170px;
  top: 40px;
  visibility: hidden;
  opacity: 1;
  transition: visibility .2s ease-in-out,opacity .2s ease-in-out;
  text-align: left;
  background-color: white;
  padding: 10px;
  font-size: 14px;
  border-radius: 3px;
  color: black;
  text-shadow: none;
`;
const Triangle = styled.div`

`;
const Bubble = styled.div`
  width: 170px;
`;

// Header & Footer Styles
const Header = styled.div`
  box-sizing: content-box;
  height: 66px;
  pointer-events: none;
  position: sticky;
  width: auto;
  z-index: 300;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.45);
  left: 0;
  position: absolute;
  right: 0;
  top: 0%;
  transition: transform .2s linear;
  margin: 0 -9999rem;
  padding: 0.25rem 9999rem;
  background-color: #494f5c;
  border-radius: 1px;
  text-transform: uppercase;
  font-family: 'Sofia Pro Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.85);
  font-size: 0.625em;
  font-weight: bold;
  margin-top: 0.25em;
  color: #c9d0de;
  text-align: center;
`;
const Footer = styled.div``;

const styles = {
    Background,
    Name,
    BundleLogo,
    Blurb,
    Infobar,
    Button,
    Clock,
    TimeLeft,
    Bell,
    Reminder,
    Software,
    BellWrapper,
    Window,
    Count,
    Dot,
    Modal,
    Triangle,
    Bubble,
    Header,
    Footer,
};

export default styles;
