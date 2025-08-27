export const TaskInput = styled.input`
  background: transparent;
  border: 0;
  border-bottom: 2px solid ${props => props.theme["green-500"]};
  font-weight: bold;
  font-size: 1.5rem;
  padding: 0.5rem;
  color: ${props => props.theme["gray-100"]};
  width: 100%;

  &:focus {
    box-shadow: none;
    border-color: ${props => props.theme["green-700"]};
  }
`;
export const MinutesAmountInput = styled.input`
  background: transparent;
  border: 0;
  border-bottom: 2px solid ${props => props.theme["green-500"]};
  font-weight: bold;
  font-size: 1.5rem;
  padding: 0.5rem;
  color: ${props => props.theme["gray-100"]};
  width: 4rem;
  text-align: center;

  &:focus {
    box-shadow: none;
    border-color: ${props => props.theme["green-700"]};
  }
`;
import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }


`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;


export const CountdownContainer = styled.div`
  
  width: 100%;
  font-family: "Roboto Mono", monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${props => props.theme["gray-100"]};

  display: flex;
  justify-content: center;
  gap: 1rem;

  span {
    background: ${props => props.theme["gray-700"]};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`
export const Separator  = styled.div`
  padding: 2rem 0;
  color: ${props => props.theme["green-500"]};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`

export const BaseCountdownButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  font-size: 1.25rem;
  font-weight: bold;
  color: ${props => props.theme["gray-100"]}; 
  background: ${props => props.theme["green-500"]};
  border: 0;
  cursor: pointer;
  border-radius: 8px;
  padding: 1rem;
  transition: filter 0.2s;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${props => props.theme["green-700"]};
  }
  `
  
  export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${props => props.theme["green-500"]};
  color: ${props => props.theme["gray-100"]}; 
  
   &:not(:disabled):hover {
    background: ${props => props.theme["green-700"]};
  }
  `;
  
  export const StopCountdownButton = styled(BaseCountdownButton)`
   background: ${props => props.theme["red-500"]}; 
  
   &:not(:disabled):hover {
    background: ${props => props.theme["green-700"]};
  }

  `;