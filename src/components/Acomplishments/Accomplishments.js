import {Section, SectionDivider, SectionTitle} from '../../styles/GlobalComponents';
import {Box, Boxes, BoxNum, BoxText} from './AcomplishmentsStyles';
import {accomplishmentsData} from '../../constants/constants';

const Accomplishments = () => (
	<Section>
		<SectionTitle>Personal Accomplishments</SectionTitle>
		<Boxes>
			{accomplishmentsData.map(({number, text}, index) => (
				<Box key={index}>
					<BoxNum>{number}+</BoxNum>
					<BoxText>{text}</BoxText>
				</Box>
			))}
		</Boxes>
	</Section>
);

export default Accomplishments;
