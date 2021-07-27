import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;

  box-shadow: 0px 0px 5px 5px rgba(56, 56, 56, 0.2);
  padding: 10px;

  margin: 10px 10px;

  input[type='text'],
  textarea {
    margin: 10px 10px 0px 10px;
    padding: 5px;
  }

  input[type='text'] {
    height: 35px;
  }

  textarea {
    resize: none;
  }

  button {
    background-color: rgb(46, 95, 148);
    cursor: pointer;
    color: white;

    height: 35px;
    margin: 12px 10px 10px 10px;
  }
`;

export const AllButtonEdit = styled.div`
  display: flex;

  button {
    padding: 0 10px;
    width: 100%;
  }

  button:nth-child(1) {
    background: rgb(80, 80, 80);
  }

  button:nth-child(2) {
    background: rgb(46, 95, 148);
  }
`;
