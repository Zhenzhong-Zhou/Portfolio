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
					<LinkItem href={"tel: 306-250-0315"}>306-250-0315</LinkItem>
				</LinkColumn>
				<LinkColumn>
					<LinkTitle>Email</LinkTitle>
					<LinkItem href={"mailto: zhenzhong001.zhou@gmail.com"}>zhenzhong001.zhou@gmail.com</LinkItem>
				</LinkColumn>
			</LinkList>
			<SocialIconsContainer>
				<CompanyContainer>
					<Slogan>Keep learning and innovating. &nbsp;Ready for the future.</Slogan>
				</CompanyContainer>
				<SocialContainer>
					<SocialIcons target="_blank" rel="noopener noreferrer" href={"https://github.com/Zhenzhong-Zhou"}>
						<AiFillGithub size={"3rem"}/>
					</SocialIcons>
					<SocialIcons target="_blank" rel="noopener noreferrer" href={"https://www.linkedin.com/in/zhenzhong-zhou/"}>
						<AiFillLinkedin size={"3rem"}/>
					</SocialIcons>
					<SocialIcons target="_blank" rel="noopener noreferrer" href={"https://www.instagram.com/zhouzhenzhong/"}>
						<AiFillInstagram size={"3rem"}/>
					</SocialIcons>
				</SocialContainer>
			</SocialIconsContainer>
		</FooterWrapper>
	);
};

export default Footer;
