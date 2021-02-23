export default function Layout({ children }) {
    return (
        <>
            <nav className="top-band"></nav>
            <div className="main-body">{children}</div>
            <footer className="footer">
             <p> 20XX - 20XX © v1gn3sh</p>
            </footer>
        </>
    )
}