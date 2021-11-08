import {Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import {LeftSection} from './HeroStyles';

const Hero = () => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Welcome to <br/>
				Zhenzhong Zhou's Portfolio
			</SectionTitle>
			<SectionText>
				Bachelor of Science – Computer Science&emsp;&emsp;&emsp;2016 – 2021.04<br/>
				&emsp;University of Saskatchewan, Saskatoon, SK<br/><br/>
				I am a new graduate university student, but I have a good organization, time management,
				self-studying, teamwork attributes and communication effectively can support me to be a qualified candidate.
			</SectionText>
			<Button onClick={() => window.open("https://github.com/Zhenzhong-Zhou", "_blank", "noopener noreferrer")}>Learn More</Button>
		</LeftSection>
	</Section>
);

export default Hero;