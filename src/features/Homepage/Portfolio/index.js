import { Paragraph, Title, Wrapper } from "./styled";
import { ReactComponent as GithubLogo } from "./github_blue.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories, selectStatus } from "../homepageSlice";
import { useWindowWidth } from "../useWindowWidth";
import { Tiles } from "./Tiles";
import { useEffect } from "react";
import { Loader } from "./Loader";
import { Error } from "./Error";

export const Portfolio = () => {
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();
  const iconSize = useWindowWidth();

  useEffect(() => dispatch(fetchRepositories()), [dispatch]);

  return (
    <Wrapper>
      <GithubLogo width={iconSize()} height={iconSize()} />
      <Title>Portfolio</Title>
      <Paragraph>My recent projects</Paragraph>
      {
        status === "loading"
          ? (<Loader />)
          : (status === "error"
            ? (<Error />)
            : (<Tiles />)
          )
      }
    </Wrapper>
  )
}