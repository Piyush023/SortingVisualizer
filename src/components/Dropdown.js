import React, { useState } from 'react';
import styled from 'styled-components';

const Main = styled('div')`
  padding: 0xp;
  margin: 0px;
  font-family: sans-serif;
  background: #f0f0f0;
  height: fit-content;
`;

const DropDownContainer = styled('div')`
  width: 10.5em;
  margin: 0 auto;
`;

const DropDownHeader = styled('div')`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
`;

const DropDownTextContainer = styled('div')`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: black;
  font-size: 1.3rem;
  font-weight: 900;
  text-align: center;
`;

const DropDownList = styled('ul')`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: black;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled('li')`
  list-style: none;
  margin-bottom: 0.8em;
`;

const options = ['BubbleSort', 'InsertionSort', 'SelectionSort', 'RadixSort'];

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };
  return (
    <Main>
      <DropDownTextContainer>
        <h1>Sorting Visualizer</h1>
        <h5>Select the Algorithm to Visualize</h5>
      </DropDownTextContainer>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>{selectedOption || 'BubbleSort'}</DropDownHeader>
        {isOpen && (
          <div>
            <DropDownList>
              {options.map((option) => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </div>
        )}
      </DropDownContainer>
    </Main>
  );
};

export default DropdownMenu;
