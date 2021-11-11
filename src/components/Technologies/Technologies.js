import {DiFirebase, DiReact, DiZend} from 'react-icons/di';
import {Section, SectionDivider, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import {List, ListContainer, ListItem, ListParagraph, ListTitle} from './TechnologiesStyles';

const Technologies = () => (
	<Section id={"tech"}>
		<SectionDivider/>
		<br/>
		<SectionTitle>Technologies</SectionTitle>
		<SectionText>
			I've learned with some technologies in the web development world.<br/>
			- From Back-End to Front-End, and using git version control to manage every project<br/>
			- Have some basic knowledge about UI / UX<br/>
			- Familiar with some IDEs, such as WebStorm, PyCharm, and IntelliJ<br/>
			- Have practiced and learned software development methodologies: Waterfall and Agile<br/>
			- Have some basic knowledge about Photoshop and command line interface<br/>
			- Have some programming experiences with C#, UNIX, Java and Python<br/>
			- Familiar with game engine: Unity<br/>
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