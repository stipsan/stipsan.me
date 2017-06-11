import styled from 'styled-components'
import getDevicePixelRatio from '../utils/device-pixel-ratio'
import getGravatarUrl from '../utils/gravatar'

const ratio = getDevicePixelRatio()

const size = 80
const StyledImg = styled.img`
  border-radius: 50%;
  height: ${size}px;
  width: ${size}px;
  margin-bottom: 20px;
`

export default () => <StyledImg src={getGravatarUrl(size * ratio)} />
