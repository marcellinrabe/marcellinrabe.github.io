import AppQueryProvider from './AppQueryProvider';
import IconThemeProvider from './IconThemeProvider';
import UserProvider from './UserProvider';

export default function AppProvider({ component }) {
    return (
        <AppQueryProvider>
            <UserProvider>
                <IconThemeProvider>{component}</IconThemeProvider>
            </UserProvider>
        </AppQueryProvider>
    );
}
