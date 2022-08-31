import logo from '../../../styles/logo.svg'
import classes from './styles.module.scss'

const HeaderComponent = () => {
  return (
    <header className={classes.appHeader}>
      <img src={logo} className={classes.appLogo} alt="logo" />
    </header>
  )
}

export default HeaderComponent
