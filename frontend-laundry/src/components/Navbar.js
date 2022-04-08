import React from 'react';
import { Link } from "react-router-dom";
import { MdLocalLaundryService } from "react-icons/md"
import { RiLogoutBoxRLine } from "react-icons/ri"


function Logout() {
    // remove data token dan user dari local storage
    localStorage.removeItem("user")
    localStorage.removeItem("token")
}
export default function Navbar(props) {
    let greeting = JSON.parse(localStorage.getItem(`user`))
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
            {/* <ul class="nav nav-tabs"> */}
                <div className="container-fluid">
                <MdLocalLaundryService size={30} color="white" />
                    <a className="navbar-brand ">
                       LaundryCenter
                    </a>

                    {/* button toggler */}
                    <button className="navbar-toggler"
                        data-bs-toggle="collapse"
                        data-bs-target="#myNav"
                        aria-controls="myNav"
                        aria-expanded="false">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* define menus */}
                    <div className="collapse navbar-collapse" id="myNav">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <Link to="/" className="nav-link text-white">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/member" className="nav-link text-white">
                                    Member
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/paket" className="nav-link text-white">
                                    Paket
                                </Link>
                            </li>
                            <li className="nav-item"> 
                                <Link to="/user" className="nav-link text-white">
                                    User
                                </Link>
                            </li>
                            <li className="nav-item"> 
                                <Link to="/outlet" className="nav-link text-white">
                                    Outlet
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/transaksi" className="nav-link text-white">
                                    Transaksi
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/form_transaksi" className="nav-link text-white">
                                    Transaksi Baru
                                </Link>
                            </li>                       
                        </ul>
                    </div>
                    <div>
                        <h7 className='text-white'>Hai, {greeting.role}</h7>
                    </div>
                    <Link to="/auth" className="nav-link text-white"
                                    onClick={() => Logout()}>
                    <RiLogoutBoxRLine size={25} color="white" style={{float: "right"}} /> </Link>
                </div>
            {/* </ul> */}
            </nav><br />
            {props.children}
        </div>
    )
}