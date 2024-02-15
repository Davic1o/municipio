import React from 'react'
import './admin.css'
import PanelLateral from '../../components/PanelLateral'

function Admin() {
  return (
    <>
    <div className="admin__container">
      <div className="menu__lateral">
    <PanelLateral/>
      </div>
    </div>
    </>
  )
}

export default Admin