import styled from 'styled-components'
import { Text } from 'rebass/styled-components'

export const StyledGradientWrapper = styled.div`
  background-color: #3f4245;
  /* min-height: 100vh; */
  background:
    linear-gradient(
      to left top,
      rgba(0, 255, 255, 1) 0%,
      rgba(255, 0, 255, 0.5) 50%,
      rgba(255, 255, 0, 1) 100%
    ),
    url(./noise.svg);
    /* url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAIklEQVQoU2NkYGD4z8DAwMiAA+CUgKmnjQIUN9HGChQPAwB5swIJcl6NNwAAAABJRU5ErkJggg=="); */
    display: flex;
    flex-direction: column;

    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: stretch;
    align-content: stretch;

    height: 100%;
`

// eslint-disable-next-line space-in-parens
export const TitleWrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  padding: 5rem 0 1rem;
`

// eslint-disable-next-line space-in-parens
export const CopyButton = styled(Text)`
  cursor: pointer;
  text-align: center;
  background-color: ${( props: { copied: boolean }): string => { return props.copied ? '#fd5949' : '#313131' }};
  transition: background-color ease-out 0.25s, color ease-out 0.25s;
  user-select: none;
  font-size: 20px;
  padding: 10px;
  font-weight: bold;
  color: white;

  &:active {
    background-color: blue;
  }
`
