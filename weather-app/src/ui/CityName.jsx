import { useEffect, useState } from "react";
import { UNSPLASH_KEY, UNSPLASH_URL } from "../constants/constants";
import styled from "styled-components";
import Heading from "./Heading";

const StyledBg = styled.div`
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: calc(var(--border-radius-lg) * 2);
  overflow: hidden;
  background-image: url(${(props) => props.bg});
  background-position: center;
  background-size: cover;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  & * {
    position: relative;
    z-index: 2;
  }
`;

function CityName({ name }) {
  const [imgSrc, setImagSrc] = useState("");
  useEffect(function () {
    async function fetchBGimages() {
      try {
        const data = await fetch(
          `${UNSPLASH_URL}/search/photos?query=${name}&client_id=${UNSPLASH_KEY}`
        );
        const res = await data.json();
        const url = res.results[0].urls.regular;
        setImagSrc(url);
      } catch (error) {
        throw new Error(error.message);
      }
    }
    fetchBGimages();
  });
  return (
    <StyledBg bg={imgSrc}>
      <Heading as="h4" type="secondary">
        {name}
      </Heading>
    </StyledBg>
  );
}

export default CityName;
