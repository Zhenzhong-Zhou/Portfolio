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
				&emsp;&emsp;University of Saskatchewan, Saskatoon, SK<br/><br/>
				I have a good organization, time management, and teamwork attributes.<br/>
				I am able to:<br/>
				&emsp;&emsp;make a general whole software idea and give some special ideas &emsp;&emsp;&emsp;&emsp;into different parts,<br/>
				&emsp;&emsp;design or draw a common logical software process,<br/>
				&emsp;&emsp;test software and give a report.<br/>
			</SectionText>
			<Button onClick={() => window.location = "https://github.com/Zhenzhong-Zhou"}>Learn More</Button>
		</LeftSection>
	</Section>
);

export default Hero;