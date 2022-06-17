import React, { useState } from "react";
import * as S from "./styled";
import Button from "../button";

const InputSearch = () => {
    
const [usernameForSearch, setUsernameForSearch] = useState();

  return (
    <>
      <S.Wrapper>
      <input
          type="text"
          name="usernameForSearc"
          placeholder="Digite o username para pesquisa..."
          size="140"
          onChange={(event) => setUsernameForSearch(event.target.value)}
        />
      </S.Wrapper>
      <Button inputSearch={usernameForSearch}/>
    </>
  );
};

export default InputSearch;