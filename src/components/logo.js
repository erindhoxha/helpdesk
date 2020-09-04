/** @jsx jsx */
import { jsx } from "theme-ui"
import LogoImage from "../../static/evacheckinlogo.png"

const Logo = (props) => (
  <div>
    <img width="70" height="70" alt="Eva check-in logo" src={LogoImage}></img>
  </div>
)

Logo.defaultProps = {
  color: "white",
}

export default Logo
