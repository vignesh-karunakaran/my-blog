export default function Layout({ children }) {
    return (
        <>
            <nav class="top-band"></nav>
            <div class="main-body">{children}</div>
            <footer className="footer">
             <p> 20XX - 20XX © v1gn3sh</p>
            </footer>
        </>
    )
}