import {DiFirebase, DiReact, DiZend} from 'react-icons/di';
import {Section, SectionDivider, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import {List, ListContainer, ListItem, ListParagraph, ListTitle} from './TechnologiesStyles';

const Technologies = () => (
	<Section id={"tech"}>
		<SectionDivider/>
		<br/>
		<SectionTitle>Technologies</SectionTitle>
		<SectionText>
			I have learned with some technologies in the web development world.<br/>
			- From Back-End to Front-End, using git version control to manage every project<br/>
			- Basic knowledge about UI / UX<br/>
			- Familiarity with some IDEs, such as WebStorm, PyCharm, and IntelliJ<br/>
			- Learned and Applied software development methodologies: Waterfall and Agile<br/>
			- Basic knowledge about Photoshop and command line interface<br/>
			- Programming experiences with C#, UNIX, Java and Python<br/>
			- Familiarity with game engine: Unity<br/>
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
					<ListTitle>Operating System</ListTitle>
					<ListParagraph>
						macOS<br/>
						Windows 10 <br/>
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;