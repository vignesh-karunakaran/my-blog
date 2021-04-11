import Link from "next/link"
export default function Layout({ children }) {
    return (
        <>
           	<nav className="top-band">
             <div>
        		<Link href="/">
        		 <a>Home</a>
        		</Link>
      		 </div>
      		 <div>
        	  <Link href="/about">
        	   <a>About</a>
        	  </Link>
      		 </div>
      		</nav>
            <div className="main-body">{children}</div>
            <footer className="footer">
             <p> 2019 - 20XX © vign3sh</p>
            </footer>
        </>
    )
}