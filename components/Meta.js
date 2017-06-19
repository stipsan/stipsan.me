import Helmet from 'react-helmet'
import { AppleTouchIcon, Icon, TileImage } from '../utils/icons'

export default () =>
  <Helmet defaultTitle="Stian Didriksen" titleTemplate="Stian Didriksen - %s">
    <link {...Icon(16)} />
    <link {...Icon(32)} />
    <link {...Icon(96)} />
    <link {...Icon(192)} />
    <link {...AppleTouchIcon(57)} />
    <link {...AppleTouchIcon(76)} />
    <link {...AppleTouchIcon(80)} />
    <link {...AppleTouchIcon(114)} />
    <link {...AppleTouchIcon(120)} />
    <link {...AppleTouchIcon(144)} />
    <link {...AppleTouchIcon(152)} />
    <link {...AppleTouchIcon(180)} />
    <meta {...TileImage(144)} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Helmet>
