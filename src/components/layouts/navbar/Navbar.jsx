import React, {useState} from "react";
import { useNavigate, Link} from "react-router-dom";
import CardWidget from '../../common/cardWidget/CardWidget.jsx'
import './Navbar.css'
import { menuNavigate } from "../../../routes/menuNavigate.js";
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';

const Navbar = ({theme,setTheme,productsInCart,setProductsInCart}) =>{
    const navigate = useNavigate();

    return <>
        <nav className={theme ? 'light' : 'dark'}>
            <img onClick={()=>navigate('/')} src="https://res.cloudinary.com/dvcmeanik/image/upload/v1684852170/iuruqdqub5i4mgjw3cfs.jpg"/>
            {menuNavigate.map(({id,path,title,Icon})=>{
                return <Link id={id} to={path} className={theme ? 'light' : 'dark'}><Icon/>{title}</Link>
            })}
            <a onClick={()=>console.log('click')}><ElectricBoltIcon/>Tecnologia</a>
            <a onClick={()=>setTheme(!theme)}><DarkModeIcon/>{theme ? 'DarkTheme' : 'LightTheme'}</a>
            <CardWidget theme={theme} productsInCart={productsInCart} setProductsInCart={setProductsInCart}/>
        </nav>
    </> 
}
export default Navbar;