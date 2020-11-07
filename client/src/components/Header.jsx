import React from 'react';
import styles from '../styles/topStyledComponents.js';
import GlobalFonts from '../../../fonts/fonts.js';

const Header = () => {

  return (
    <styles.Header>
      <table>
        <tbody>
          <tr>
            <td><img src="https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/humbleHumble.svg" style={{
              maxHeight: '75px',
              maxWidth: '120px',
            }}></img></td>
            <td>9 bundles</td>
            <td>choice</td>
            <td>store</td>
            <td>about</td>
          </tr>
        </tbody>
      </table>
    </styles.Header>
  );
};

export default Header;
