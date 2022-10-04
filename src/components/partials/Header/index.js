import React from 'react'
import { HeaderArea } from './styled'
import { Link } from 'react-router-dom'
import { isLogged } from '../../../helpers/AuthHandler'

const Header = () => {
	let logged = isLogged()

	return (
		<HeaderArea>
			<div className="container">
				<div className="logo">
					<Link to='/'>
						<spam className="logo-1">O</spam>
						<spam className="logo-2">L</spam>
						<spam className="logo-3">X</spam>
					</Link>
				</div>
				<nav>
					<ul>
						{!logged &&
							<>
								<li>
									<Link to="/signin">Login</Link>
								</li>
								<li>
									<Link to="/signup">Cadatrar</Link>
								</li>
								<li>
									<Link to="/signin" className="button">Postar um anúncio</Link>
								</li>
							</>
						}
						{logged &&
							<>
								<li>
									<Link to="/my-account">Minha Conta</Link>
								</li>
								<li>
									<Link to="/logout">Sair</Link>
								</li>
								<li>
									<Link to="/post-an-ad" className="button">Postar um anúncio</Link>
								</li>
							</>
						}
					</ul>
				</nav>
			</div>
		</HeaderArea>
	)
}

export default Header