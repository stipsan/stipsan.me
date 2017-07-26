import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  border-radius: 8px;
  box-shadow: rgba(0,0,0,0.4) 0 9px 20px;
  background: white;
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
