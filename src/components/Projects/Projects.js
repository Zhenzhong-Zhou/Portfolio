import {
	BlogCard,
	CardInfo,
	ExternalLinks,
	GridContainer,
	HeaderThree,
	Hr,
	Img,
	Tag,
	TagList,
	TitleContent,
	UtilityList
} from './ProjectsStyles';
import {Section, SectionDivider, SectionTitle} from '../../styles/GlobalComponents';
import {projects} from '../../constants/constants';

const Projects = () => (
	<Section nopadding id={"projects"}>
		<SectionDivider/>
		<SectionTitle main>Projects</SectionTitle>
		<GridContainer>
			{projects.map(({id, image, title, description, tags, source, visit}) => (
				<BlogCard key={id}>
					<Img src={image}/>
					<TitleContent>
						<HeaderThree title={title.toString()}>{title}</HeaderThree>
						<Hr/>
					</TitleContent>
					<CardInfo>{description}</CardInfo>
					<div>
						<TitleContent style={{marginTop: "20px"}}>Stack</TitleContent>
						<TagList>
							{tags.map((tag, index) => (
								<Tag key={index}>{tag}</Tag>
							))}
						</TagList>
					</div>
					<UtilityList>
						<ExternalLinks href={visit} target={"_blank"} rel={"noreferrer"}>Code</ExternalLinks>
						<ExternalLinks href={source} target={"_blank"} rel={"noreferrer"}>Source</ExternalLinks>
					</UtilityList>
				</BlogCard>
			))}
		</GridContainer>
	</Section>
);

export default Projects;