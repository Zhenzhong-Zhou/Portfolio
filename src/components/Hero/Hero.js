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
				Bachelor of Science – Computer Science<br/>
				University of Saskatchewan &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;2016 – 2021.04<br/><br/>
				Diploma in Business Administration - Supply Chain Management<br/>
				PSB College/Academy &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;2011 – 2013.07<br/><br/>

				I am a graduated university student with qualities of a satisfied organization,
				time management, critical thinking, self-studying, team-oriented and exceptional communication skills.
			</SectionText>
			<Button onClick={() => window.open("resume/Resume.pdf", "_blank", "noopener noreferrer")}>Learn More</Button>
		</LeftSection>
	</Section>
);

export default Hero;