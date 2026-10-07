import styled from "styled-components";

export const Title = styled.h2`
  color: white;
  text-align: center;
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
`

export const Backgraund = styled.div`
  background: linear-gradient(to right, #fe7e5d, #7f3841);
  border-radius: 20px;
  padding: 20px;
  margin: 16px 0;
`

export const DivProject = styled.div`
  background-color: #181f36;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  gap: 24px;
  border-radius: 20px;
`

export const DivImage = styled.div`
  background: linear-gradient(to right, #fe7e5d, #7f3841);
  height: 30vh;
  width: 90vw;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 700px;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`

export const ProjectTitle = styled.h2`
  color: white;
  font-size: 28px;
  font-weight: bold;
`

export const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 500px;
  width: 100%;
`

export const DivInput2 = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`

export const InputLabel = styled.label`
  color: white;
  font-size: 15px;
  font-weight: 500;

  span {
    color: #ef4f45;
    font-weight: bold;
  }
`

export const Input = styled.input`
  border-radius: 15px;
  border: solid 1px #d2dae2;
  padding: 12px 20px;
  outline: none;
  width: 100%;
`

export const Button = styled.button`
  border: none;
  background: linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%);
  font-size: 18px;
  color: white;
  padding: 16px 32px;
  width: fit-content;
  cursor: pointer;
  border-radius: 28px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`