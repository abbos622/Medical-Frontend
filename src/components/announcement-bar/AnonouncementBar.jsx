import React from 'react'
import './AnnouncementBar.scss'
import Container from '../../utils/Utils'
import { FaLocationDot } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';

const AnonouncementBar = () => {
  const { pathname } = useLocation()
  if (pathname.includes("patient")) return null
  if (pathname.includes("doctor")) return null

  return pathname.includes('auth') ? null : (
    <div className='announcement'>
      <Container>
        <div className="announcement-wrapper">
          <div className="location-item">
            <p><i><FaLocationDot /></i> City:</p>
            <strong>Tashkent</strong>
          </div>
          <div className="top-actions">
            <div className="number-text">+998 (33) 500-31-17</div>
            <div className="work-time">
              <span className='material-symbols-outlined'>schedule</span>
              <p>Monday - Sunday 08:00 - 19:00</p>
            </div>
            <div className="languages-action">
              <button>UZB</button>
              <button>RUS</button>
              <button>ENG</button>
            </div>
            <Link className='auth-link' to={'/auth/register'}> <span className='material-symbols-outlined'>person</span> Register</Link>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default AnonouncementBar
