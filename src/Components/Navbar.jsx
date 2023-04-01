import React from 'react'
import { Link } from 'react-router-dom';
import styled from "./navbar.module.css";
import { AiOutlineMenu,AiOutlineShoppingCart} from "react-icons/ai";

import Dropdown from './Dropdown';
const Navbar = () => {

  let cart=JSON.parse(localStorage.getItem("cart"))
let profile=JSON.parse(localStorage.getItem("Token"))

var val=0
if(cart){
  val=cart.length;
}
  return (
    <div className={styled.main_div}>
      <h2 className={styled.logo}><Link to="/">My Store</Link></h2>
      <input type="checkbox" className={styled.chack} />
      <label  className={styled.show_menu_btn}>
      <AiOutlineMenu/>
      </label>

      <ul className={styled.menu}>

      {profile?<Dropdown/>:<Link to="/login">Login</Link>}
        <Link to="/cart" style={{display:"flex"}}><AiOutlineShoppingCart size={"35px"}/>{val}</Link>
        <label  className={styled.hide_menu_btn}>
         <AiOutlineMenu/>
        </label>
      </ul>
    </div>
  );
}

export default Navbar