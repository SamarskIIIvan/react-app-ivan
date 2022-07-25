
import "./Nav.css"

import {NavLink} from "react-router-dom";

export const Nav = () => {
    return (
        <div className="nav">          <NavLink
            to="/professions"
            style={({ isActive }) => {
                return {color: isActive ? 'red' : 'Black'}
            }}
        >
            Востребованность
        </NavLink>
            <NavLink
                to="/forWhom"
                style={({ isActive }) => {
                    return {color: isActive ? 'red' : 'Black'}
                }}
            >
                Для кого
            </NavLink>
            <NavLink
                to="/kareer"
                style={({ isActive }) => {
                    return {color: isActive ? 'red' : 'Black'}
                }}
            >
                Карьера
            </NavLink>
            <NavLink
                to="employer"
                style={({ isActive }) => {
                    return {color: isActive ? 'red' : 'Black'}
                }}
            >
                Потенциальные работодатели
            </NavLink>
            <NavLink
                to="/salary"
                style={({ isActive }) => {
                    return {color: isActive ? 'red' : 'black'}
                }}
            >
                Выручка
            </NavLink>
            <NavLink
                to="/responsibilities"
                style={({ isActive }) => {
                    return {color: isActive ? 'red' : 'black'}
                }}
            >
                Обязанности
            </NavLink>

        </div>
    )
}