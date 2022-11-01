import { FaPizzaSlice } from "react-icons/fa";
import { GiTacos, GiChopsticks } from "react-icons/gi";
import { MdFastfood } from "react-icons/md";
import styled from 'styled-components';
import { NavLink } from "react-router-dom";


import React from 'react'

function Categories() {
  return (
    <List>
        <SLink to={'/cuisine/Italian'}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </SLink>
        <SLink to={'/cuisine/American'}>
            <MdFastfood />
            <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/Mexican'}>
            <GiTacos />
            <h4>Mexican</h4>
        </SLink>
        <SLink to={'/cuisine/Chinese'}>
            <GiChopsticks />
            <h4>Chinese</h4>
        </SLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #043005,  #013b02 );
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);

    h4 {
        color: snow;
        font-size: 0.8rem;
        margin-top: 0.4rem;
    }
    svg {
        color: snow;
        font-size: 1.5rem;
    }
    &.active {
        background: linear-gradient(to left, #f27121, #e94057);

        svg {
            color: snow; 
        }
        h4 {
            color: snow;
        }
    }
`;

export default Categories