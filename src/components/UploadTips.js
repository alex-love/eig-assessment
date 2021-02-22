import React from 'react'
import '../styles/UploadTips.scss'
import {Link} from '@reach/router'
export default function UploadTips() {
  return (
    <div className="upload-tips">
      <div className="wrapper">
        <p>
        In order to most efficiently process your claim, we ask that you submit photos of the damage that you reported. The photos should clearly show the damage itself, as well as the surrounding areas.
        </p>
        <div className="images">
          <h3>What Images to Take</h3>
          <h4>Photograph:</h4>
          <ul>
          <li>
           -- The front of your house, with a mailbox or your house number clearly visible
          </li>
          <li>
           -- Any spoiled foods or perishable goods included in the claim, prior to throwing them away
          </li>
          <li>
           -- Each damaged room or area from a variety of angles
            <ul>
            <li>
             -- Wide-angle views of the room as a whole
            </li>
          <li>
           -- Photos of the top half of the room (walls and ceiling), as well as the lower half of the room (floor and baseboards) to establish the layout
          </li>
            </ul>
          </li>

          <li>
           -- Any items that were damaged. If an item’s location is not clearly visible in the room pictures, include both close-up images of the damage and wider shots
          </li>
          <li>
           -- Any damage to the room itself (broken windows, water marks, etc.).
          </li>
          <li>
           -- Serial numbers or model numbers for any damaged appliances or electronics
          </li>

          </ul>
          <p>You may want to take video of the damaged areas, as well.</p>
        </div>
        <div className="how-to">
          <h3>How to Take Helful Pictures:</h3>
          <ul>
            <li>-- Use as much light as possible. Open curtains or blinds, or use a light source to allow for clarity</li>
            <li>-- Hold your camera as still as possible. If needed, steady it on a firm surface or use a tripod</li>
            <li>-- Ensure that your camera has focused. Especially in low light, this may take a second</li>
          </ul>
        </div>
        <Link to="/contact" className="link">Contact EIG</Link>
      </div>
    </div>
  )
}
