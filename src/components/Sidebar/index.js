import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { FileTextFilled, ToolFilled, DashboardFilled } from "@ant-design/icons";
import { AuthContext } from "../../auth/AuthContext";
import LogoHospital from "../../images/logo_essalud.jpg";
import "./Sidebar.css";

export const Sidebar = () => {

  const [isAdmin, setIsAdmin] = useState(false);
  const {user} = useContext(AuthContext);      
  
  const adminMenu = () => {
    if(user.roles.includes("ROLE_ADMIN"))
    { 
      return (
        <React.Fragment>
          <ul >
            <li>
              <NavLink to="/inicio" activeClassName="active">
                • Inicio
              </NavLink>
            </li>
            <li>
              <span className="title">
                <DashboardFilled /> PROCESOS
              </span>
            </li>
            <li>
              <NavLink to="/proceso/asignar-servicio" activeClassName="active">
                • Asignar Servicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/proceso/asignar-convenio" activeClassName="active">
                • Asignar Convenio
              </NavLink>
            </li>
            <li>
              <NavLink to="/proceso/asignar-grupo" activeClassName="active" className="done">
                • Grupo de guardia en emergencia
              </NavLink>
            </li>
            <li>
              <span className="title">
                <ToolFilled /> MANTENIMIENTOS
              </span>
            </li>
            <li>
              <NavLink to="/mantenimiento/universidad" activeClassName="active" className="done">
                • Universidad
              </NavLink>
            </li>
            <li>
              <NavLink to="/mantenimiento/especialidad" activeClassName="active">
                • Especialidad
              </NavLink>
            </li>
            <li>
              <NavLink to="/mantenimiento/medico" activeClassName="active" className="done">
                • Médico
              </NavLink>
            </li>
            <li>
              <NavLink to="/mantenimiento/servicio" activeClassName="active">
                • Servicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/mantenimiento/grupo" activeClassName="active" className="done">
                • Grupos
              </NavLink>
            </li>
            <li>
              <NavLink to="/mantenimiento/usuario" >
                • Usuarios
              </NavLink>
            </li>
          </ul>
        </React.Fragment>
      )
    } else{
      return null;
    }
    
  }  
  return (        
    <div className="left">
      <div className="logo">
        <img src={LogoHospital} alt="Logo Harrison" />
        <h2>Hospital Almenara</h2>
      </div>            
      {adminMenu()}
      <ul>
        <li>
          <span className="title">
            <FileTextFilled /> REPORTES
          </span>
        </li>
        <li>
          <NavLink to="/reporte/medico" activeClassName="active" className="done">
            • Médico
          </NavLink>
        </li>
        <li>
          <NavLink to="/reporte/especialidad" activeClassName="active" className="done">
            • Especialidad
          </NavLink>
        </li>
        <li>
          <NavLink to="/reporte/servicio" activeClassName="active" className="done">
            • Servicio
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
