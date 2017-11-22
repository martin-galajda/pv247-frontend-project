import '../../utils/polyfills'
import './globalStyles'

const mainStyles = {
    margin: 'auto',
    height: '100%',
    display: 'flex',
    width: '100%',
    'flexDirection': 'column',
    'justifyContent': 'center',
}

const App = ({ children }) => (
    <main style={mainStyles}>
        {children}
    </main>
)

export default App
