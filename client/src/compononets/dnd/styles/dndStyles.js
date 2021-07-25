import styled from "styled-components/macro";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  .reset {
    align-self: flex-end;
    padding: 10px 17px;
    border: none;
    background: rgba(0, 0, 0, 0.96);
    outline: none;
    color: rgba(255, 255, 255, 1);
    font-size: 16px;
    border-radius: 9px;
    cursor: pointer;
    margin-bottom: 8px;
  }
  .multi {
      margin-top: 22px;
      margin-bottom: 6px;
  }
  input {
    margin: 16px 0;
    align-self: flex-start;
  }
`;
export const DnDwrapper = styled.div`
  width: 100%;
  height: 324px;
  background: #f2f2f2;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    text-align: center;
  }
  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 0.5rem;
    list-style-type: none;
    img {
      object-fit: contain;
      margin-right: 1rem;
    }
  }
`;

export const SingleImage = styled.div`
    width: 100%;
    height: 100%;
    h3 {
      display: block;
      background: red;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
`;


export const MultipleImage = styled.div`
  width: 100%;
  height: 100%;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    
`;

export const Images = styled.div`
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
`;

export const FileHandlers = styled.div`
  display: flex;
`;