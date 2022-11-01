import React, {useState} from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Search() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/'+ input)
  };

  return (
      <Form onSubmit={submitHandler}>
        <div>
          <FaSearch/>
          <input 
            onChange={(e) => setInput(e.target.value)} 
            type="text" 
            value={input}
          />
        </div>
      </Form>
  );
}

const Form = styled.form`
  margin: 0rem 20rem;
  div {
    position: relative;
    width: 100%;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #043005,  #013b02 );
    font-size: 1.5rem;
    color: white;
    padding: 1rem 4rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
}
svg {
  position: absolute;
  color: white;
  top: 50%;
  left: 0%;
  transform: translate(100%, -50%);
}
`;

export default Search