import {DiFirebase, DiReact, DiZend} from 'react-icons/di';
import {Section, SectionDivider, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import {List, ListContainer, ListItem, ListParagraph, ListTitle} from './TechnologiesStyles';

const Technologies = () => (
	<Section id={"tech"}>
		<SectionDivider/>
		<br/>
		<SectionTitle>Technologies</SectionTitle>
		<SectionText>
			I have some programming experience with C#, UNIX, Java and Python.<br/>
			I've studied some basic knowledge about Photoshop and command line interface.<br/>
			Familiarity with various IDEs, including Unity, PyCharm, IntelliJ and WebStorm.<br/>
			Operating Systems: macOS and Windows 10.<br/>
			Practiced software development methodologies: Waterfall and Agile.<br/>
			I've studied and learn with some technologies in the web development world.<br/>
			From Back-End to Front-End, and using git version control every project
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
