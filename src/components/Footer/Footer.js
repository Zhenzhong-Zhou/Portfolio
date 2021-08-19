import {AiFillGithub, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai';
import {SocialIcons} from '../Header/HeaderStyles';
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialContainer,
	SocialIconsContainer
} from './FooterStyles';

const Footer = () => {
	return (
		<FooterWrapper>
			<LinkList>
				<LinkColumn>
					<LinkTitle>Call</LinkTitle>
					<LinkItem href={"tel: 306-000-000"}>306-000-000</LinkItem>
				</LinkColumn>
				<LinkColumn>
					<LinkTitle>Email</LinkTitle>
					<LinkItem href={"mailto: bob0823.zhou@gmail.com"}>bob.zhou@usask.ca</LinkItem>
				</LinkColumn>
			</LinkList>
			<SocialIconsContainer>
				<CompanyContainer>
					<Slogan>Some slogan.</Slogan>
				</CompanyContainer>
				<SocialContainer>
					<SocialIcons href={"https://github.com/Zhenzhong-Zhou"}>
						<AiFillGithub size={"3rem"}/>
					</SocialIcons>
					<SocialIcons href={"https://www.linkedin.com/in/zhenzhong-zhou-7baa21192/"}>
						<AiFillLinkedin size={"3rem"}/>
					</SocialIcons>
					<SocialIcons href={"https://instagram.com"}>
						<AiFillInstagram size={"3rem"}/>
					</SocialIcons>
				</SocialContainer>
			</SocialIconsContainer>
		</FooterWrapper>
	);
};

export default Footer;
