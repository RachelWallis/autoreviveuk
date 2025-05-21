'use client'
import dynamic from 'next/dynamic'
const ThemeSwitch = dynamic(() => import('@/components/elements/ThemeSwitch'), {
	ssr: false,
})
import Link from 'next/link'
import Dropdown from 'react-bootstrap/Dropdown'
export default function Header1({ scroll, isMobileMenu, handleMobileMenu, handleOffcanvas, isOffcanvas }: any) {
	return (
		<>
			<header className={`header header-fixed sticky-bar ${scroll ? 'stick' : ''}`}>
				<div className="container-fluid">
					<div className="main-header">
						<div className="header-left">
							<div className="header-logo">
								<Link className="d-flex" href="/">
									<img className="light-mode" alt="Carento" src="/assets/imgs/logo/logo-w.svg" />
									<img className="dark-mode" alt="Carento" src="/assets/imgs/logo/logo-w.svg" />
								</Link>
							</div>
							<div className="header-nav">
								<nav className="nav-main-menu">
									<ul className="main-menu">
										<li><Link className="color-white" href="/about-us">About Us</Link></li>
										<li><Link className="color-white" href="/services">Services</Link></li>
										<li><Link className="color-white" href="/contact">Contact</Link></li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</header>

		</>
	)
}
