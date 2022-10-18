import styled from "styled-components";

export const ListStyled = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
margin-bottom: 30px;

li{
  display: flex;
  width: 1200px;
  height:30px;
  justify-content: space-between;
  border: 1px solid black;
}



p{
  font-size: 12px;
  width: 100%;
  padding: 5px;
  display: flex;
  justify-content:center;
  align-items: center;
  border-left: 1px solid black;
}

.header-list > p{
  font-weight: bold;
  font-size: 15px;
}

`

export const TrasactionsStyled = styled.li`
background-color: ${props => props.color || "white"};


`