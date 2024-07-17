import React from 'react';
import './alligatorbubbles.css';

function AlligatorBubbles({ images }) {
  return (
    <div className="bubbles">
      <table>
        <tbody>
          {images.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((image, colIndex) => (
                <td key={colIndex}>
                  {image && <img className="bubble" alt={image.alt} src={image.src} />}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AlligatorBubbles;
