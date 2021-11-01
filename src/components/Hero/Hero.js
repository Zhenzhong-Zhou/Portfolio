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
				University of Saskatchewan, Saskatoon, SK

			</SectionText>
			<Button onClick={() => window.location = "https://github.com/Zhenzhong-Zhou"}>Learn More</Button>
		</LeftSection>
	</Section>
);

export default Hero;