import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function Recipe() {
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('instructions');

    let params = useParams();

    useEffect(() => {
        fetchDetails();
    }, [params.name]);

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        const detailData = await data.json();
        setDetails(detailData);
    };

    return (
        <DetailStyles>
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt='food' />
            </div>
            <Info>
                <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instructions</Button>
                <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
            {activeTab === 'instructions' && (
                <div>
                <h3 dangerouslySetInnerHTML={{__html: details.summary }}></h3>
                <h3 dangerouslySetInnerHTML={{__html: details.instructions }}></h3>
            </div>
            )}

            {activeTab === 'ingredients' && (
                <ul>
                {details.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                ))}
            </ul>
            )}
            </Info>
        </DetailStyles>
    )
}

const DetailStyles = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    .active {
        background: linear-gradient(35deg, #043005,  #013b02 );
        color: snow;
    }
    h2 {
        margin-bottom: 2rem;
    }
    li {
        font-size: 1.2rem;
        line-height: 2.5rem;
    }
    ul {
        margin-top: 2rem;
    }
`;

const Button = styled.button`
    color: #043005;
    padding: 1rem 2rem;
    background: snow;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
`;

const Info = styled.div`
    margin-left: 10rem;
`;

export default Recipe