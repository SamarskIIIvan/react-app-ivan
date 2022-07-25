import nanoImg from "../../images/187329109.jpeg"
import "./Header.css"
import {Nav} from "../Nav/Nav";

export const Header = () => {
    return (
        <div className="header">
            <h2 className="text">Что делать студентам после получения диплома инженера наноэлектроники, все о работе
                после вуза.
            </h2>
       <Nav/>
            <img src={nanoImg} alt="img" className="img"/>
        </div>
    )
}