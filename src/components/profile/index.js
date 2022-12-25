import React from "react";
import useGithub from "../../hooks/github-hooks";
import * as S from "./styled";

const Profile = () => {
  const { githubState } = useGithub();

  return (
    <S.Wrapper>
      <S.WrapperImage src={githubState.user.avatar} alt="Avatar of user" />
      <S.WrapperInfoUser>
        <StatusCount/>
          <div>
            <h1>{githubState.user.name}</h1>
            <S.WrapperUserGeneric>
              <h3>Username:</h3>
              <a
                href={githubState.user.html_url}
                target="_blank"
                rel="noreferrer"
              >
                {githubState.user.login}
              </a>
            </S.WrapperUserGeneric>
            <S.WrapperUserGeneric>
              <h3>Company:</h3>
              <span>{githubState.user.company}</span>
            </S.WrapperUserGeneric>
            <S.WrapperUserGeneric>
              <h3>Location:</h3>
              <span>{githubState.user.location}</span>
            </S.WrapperUserGeneric>
            <S.WrapperUserGeneric>
              <h3>Blog:</h3>
              <a href={githubState.user.blog} target="_blank" rel="noreferrer">
                {githubState.user.blog}
              </a>
            </S.WrapperUserGeneric>
          </div>
        <StatusCount/>
      </S.WrapperInfoUser>
    </S.Wrapper>
  );
};

export default Profile;
