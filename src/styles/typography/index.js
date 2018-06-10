import Typography from 'typography'
import theme from './jmh-theme'

theme.includeNormalize = false
theme.overrideThemeStyles = ({ rhythm }, options, styles) => ({
  'a, a:visited, a:hover, a:active': {
    textDecoration: 'none',
    backgroundImage: 'none',
    textShadow: 'none'
  },
})
const typography = new Typography(theme)

export default typography

