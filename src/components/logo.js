/** @jsx jsx */
import { jsx } from "theme-ui"
import LogoImage from "../../public/evacheckinlogo.png"

const Logo = (props) => (
  <div>
    <img width="100" height="100" alt="Eva check-in logo" src={LogoImage}></img>
  </div>
)

Logo.defaultProps = {
  color: "white",
}

export default Logo
