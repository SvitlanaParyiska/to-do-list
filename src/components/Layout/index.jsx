import PropTypes from 'prop-types'

function Layout({ children }) {
  Layout.propTypes = {
    'children': PropTypes.elementType,
  }

  return <main className="container">{children}</main>
}

export default Layout
