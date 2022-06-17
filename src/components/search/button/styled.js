import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #225ed8;
    padding: 12px 12px 0 12px;
    margin: 0 16px;
    border-radius: 8px;

    &:hover {
    background-color: #2c5282;
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }

    span {
    font-weight: bold;
    color: #ffff;
    }
`;