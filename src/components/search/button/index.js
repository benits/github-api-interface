import * as S from "./styled";
import useGithub from "../../../hooks/github-hooks";

const Button = (props) => {
    
  const { getUser } = useGithub();

  const submitGetUser = () => {
    if (!props.inputSearch) return;
    return getUser(props.inputSearch);
  };

  return (
       <S.Wrapper>
        <button type="submit" onClick={submitGetUser}>
          <span>Buscar</span>
        </button>
      </S.Wrapper>
  );
};

export default Button;