import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const ResponsiveIframe = styled.iframe.attrs({
  frameBorder: "0",
  allowFullScreen: true,
  allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
})`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;
