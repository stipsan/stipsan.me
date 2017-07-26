import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  border-radius: 8px;
  background: white;

  &:before {
    content: '.';
    display: block;
    color: transparent;
    position: absolute;
    position: absolute;
    top: 5%;
    left: 5%;
    width: 90%;
    height: 90%;
    transition: all 0.25s ease-out;
    box-shadow: 0 16px 32px rgba(14,21,47,0.25), 0 8px 8px rgba(14,21,47,0.25);
  }
`

const Link = styled.a`
  display: block;
  border-radius: 8px;
  height: 21vh;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  text-decoration: none;
`

const Header = styled.h3`
  margin: 0;
  color: white;
  font-size: 18px;
  position: absolute;
  padding: 10px 10px 0 10px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(to bottom, black, transparent);
  text-shadow: black 0 2px 4px;
`

const MediumPost = ({ url, title, image }) =>
  <Wrapper>
    <Link image={image} href={url} target="_blank">
      <Header>{title}</Header>
    </Link>
  </Wrapper>

MediumPost.propTypes = {
  url: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default MediumPost
