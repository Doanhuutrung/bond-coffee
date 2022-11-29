
import React from 'react';
import useAuth from "../custom/useAuth";
import { Container, Row } from 'reactstrap';
import '../styles/Adminpage.css';
import { NavLink } from 'react-router-dom';


const admin_nav = [
    {
        display:'Dashboard',
        path:'/Dashboard'
    },
    {
        display:'New Drink',
        path:'/Dashboard/Add-Drink'
    },
    {
        display:'Manage Drink',
        path:'/Dashboard/Manage-Drink'
    },
    {
        display:'Orders',
        path:'/Dashboard/Bill'
    },
    {
        display:'Users',
        path:'/Dashboard/Users'
    },
]

const AdminNav = () => {

    const{currentUser} = useAuth(); 

    return (
        <>
        <header className='header-admin'>
        <div className="admin-nav-top">
            <Container>
                <div className='admin-nav-wrapper-top'>
                    <div className="logo">
                        <h2>TrungCoffee</h2>
                    </div>
                    <div className="search-box">
                        <input type='text' placeholder='search..........'/>
                        <span><i className="ri-search-line"></i></span>
                    </div>
                    <div className="admin-nav-top-right">
                        <span><i className="ri-notification-2-line"></i></span>
                        <span><i className="ri-settings-2-line"></i></span>
                        <img src={currentUser.photoURL} alt="" />
                    </div>
                </div>
            </Container>
        </div>
        </header>

        <section className='admin-menu '>
            <Container>
                <Row>
                    <div className="admin-navigation">
                        <ul className="admin-menu-list">
                            {admin_nav.map((item,index) => (
                                <li className="admin-menu-item" key={index}>
                                    <NavLink to={item.path} className={navClass => navClass.isActive ? 'active_admin-menu' : '' } > {item.display}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Row>

            </Container>
        </section>
        </>
    )
}

export default AdminNav