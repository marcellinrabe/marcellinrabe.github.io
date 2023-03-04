import { createContext } from 'react'
import { IconContext } from 'react-icons'

const config = {
    size: '2em',
}
const IconTheme = createContext({})
export { IconTheme }

export default function IconThemeProvider({ children }) {
    return (
        <IconContext.Provider value={config}>{children}</IconContext.Provider>
    )
}
