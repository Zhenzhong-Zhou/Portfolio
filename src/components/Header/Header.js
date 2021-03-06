import Link from 'next/link';
import {AiFillGithub, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai';
import {DiCssdeck} from 'react-icons/di';
import {Container, Div1, Div2, Div3, NavLink, SocialIcons, Span} from './HeaderStyles';

const Header = () => (
	<Container>
		<Div1>
			<Link href={"/"}>
				<a style={{display: "flex", alignItems: "center", color: "white", marginBottom: "20px"}}>
					<DiCssdeck size={"3rem"}/><Span>Zhenzhong Zhou</Span>
				</a>
			</Link>
		</Div1>
		<Div2>
			<li>
				<Link href={"#projects"}>
					<NavLink>Projects</NavLink>
				</Link>
			</li>
			<li>
				<Link href={"#tech"}>
					<NavLink>Technologies</NavLink>
				</Link>
			</li>
			<li>
				<Link href={"#about"}>
					<NavLink>About</NavLink>
				</Link>
			</li>
		</Div2>
		<Div3>
			<SocialIcons target="_blank" rel="noopener noreferrer" href={"https://github.com/Zhenzhong-Zhou"}>
				<AiFillGithub size={"3rem"}/>
			</SocialIcons>
			<SocialIcons target="_blank" rel="noopener noreferrer" href={"https://www.linkedin.com/in/zhenzhong-zhou/"}>
				<AiFillLinkedin size={"3rem"}/>
			</SocialIcons>
			<SocialIcons target="_blank" rel="noopener noreferrer" href={"https://www.instagram.com/zhouzhenzhong/"}>
				<AiFillInstagram size={"3rem"}/>
			</SocialIcons>
		</Div3>
	</Container>
);

export default Header;
