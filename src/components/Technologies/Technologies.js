import {DiFirebase, DiReact, DiZend} from 'react-icons/di';
import {Section, SectionDivider, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import {List, ListContainer, ListItem, ListParagraph, ListTitle} from './TechnologiesStyles';

const Technologies = () => (
	<Section id={"tech"}>
		<SectionDivider/>
		<br/>
		<SectionTitle>Technologies</SectionTitle>
		<SectionText>
			•&emsp; Programming experience with Java, C#, Python, JavaScript ES6+, Node.js, HTML5 and CSS3<br/>
			•&emsp; From backend to frontend, skilled using version control like Git to manage every project<br/>
			•&emsp; Learned and applied software development methodologies: Waterfall and Agile<br/>
			•&emsp; Expertise in web development <br/>
			•&emsp; Knowledgeable with database including MySQL and MongoDB<br/>
			•&emsp; Familiarity with some IDEs, such as WebStorm, PyCharm, and IntelliJ<br/>
			•&emsp; Familiarity with game engine: Unity<br/>
			•&emsp; Frameworks: React, Redux, Material-UI, Next.js, Spring Boot, Express<br/>
			•&emsp; Managements: NPM, Yarn, Maven<br/>
			•&emsp; Have some basic knowledge about UI / UX<br/>
			•&emsp; Basic knowledge about Photoshop and UNIX Shell<br/>
		</SectionText>
		<List>
			<ListItem>
				<DiReact size={"3rem"}/>
				<ListContainer>
					<ListTitle>Front-End</ListTitle>
					<ListParagraph>
						Experience with <br/>
						React.js and EJS Template
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiFirebase size={"3rem"}/>
				<ListContainer>
					<ListTitle>Back-End</ListTitle>
					<ListParagraph>
						Experience with <br/>
						Node.js and Databases: <br/>MySQL and MongoDB
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiZend size={"3rem"}/>
				<ListContainer>
					<ListTitle>Program Languages</ListTitle>
					<ListParagraph>
						Java<br/>
						C#<br/>
						JavaScript ES6+<br/>
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;