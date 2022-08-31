import HeaderComponent from '../HeaderComponent'
import classes from './styles.module.scss'

const Layout = ({ children }) => {
  return (
    <div className={classes.LayoutContainer}>
      <HeaderComponent />
      <main className={classes.mainContainer}>
        {children}
      </main>
    </div>
  )
}

export default Layout
