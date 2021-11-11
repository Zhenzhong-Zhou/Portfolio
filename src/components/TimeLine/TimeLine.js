import {useEffect, useRef, useState} from 'react';
import {
	CarouselButton,
	CarouselButtonDot,
	CarouselButtons,
	CarouselContainer,
	CarouselItem,
	CarouselItemImg,
	CarouselItemText,
	CarouselItemTitle,
	CarouselMobileScrollNode
} from './TimeLineStyles';
import {Section, SectionDivider, SectionText, SectionTitle} from '../../styles/GlobalComponents';

import {timeLineData} from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = timeLineData.length;

const Timeline = () => {
	const [activeItem, setActiveItem] = useState(0);
	const carouselRef = useRef();

	const scroll = (node, left) => {
		return node.scrollTo({left, behavior: 'smooth'});
	}

	const handleClick = (e, i) => {
		e.preventDefault();

		if (carouselRef.current) {
			const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / timeLineData.length));

			scroll(carouselRef.current, scrollLeft);
		}
	}

	const handleScroll = () => {
		if (carouselRef.current) {
			const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * timeLineData.length);
			setActiveItem(index);
		}
	}

	// snap back to beginning of scroll when window is resized
	// avoids a bug where content is covered up if coming from smaller screen
	useEffect(() => {
		const handleResize = () => {
			scroll(carouselRef.current, 0);
		}
		window.addEventListener('resize', handleResize);
	}, []);

	return (
		<Section id={"about"}>
			<SectionTitle>About Me</SectionTitle>
			<SectionText>
				In 2018 when I was studying at university, I created the first static website in my life
				using HTML and CSS. In 2020, I continued learning web programming using EJS as a frontend template
				and Node.js, Express, and MongoDB as a backend server. I deployed my project with the world
				when I finished my project. In 2021, I started self-studying React. In the meantime,
				I use React as a frontend framework, and I use Node.js, Express, and MongoDB to
				build some personal web projects and deploying on the internet.
			</SectionText>
			<CarouselContainer ref={carouselRef} onScroll={handleScroll}>
				<>
					{timeLineData.map(({text, year}, index) => (
						<CarouselMobileScrollNode key={index} final={index === TOTAL_CAROUSEL_COUNT - 1}>
							<CarouselItem index={index} id={`carousel__item-${index}`} active={activeItem}
							              onClick={(e) => handleClick(e, index)}>
								<CarouselItemTitle>
									{year}
									<CarouselItemImg
										width="208"
										height="6"
										viewBox="0 0 208 6"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											fillRule="event"
											clipRule="event"
											d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
											fill="url(#paint0_linear)"
											fillOpacity="0.33"
										/>
										<defs>
											<linearGradient
												id="paint0_linear"
												x1="-4.30412e-10"
												y1="0.5"
												x2="208"
												y2="0.500295"
												gradientUnits="userSpaceOnUse">
												<stop stopColor="white"/>
												<stop
													offset="0.79478"
													stopColor="white"
													stopOpacity="0"
												/>
											</linearGradient>
										</defs>
									</CarouselItemImg>
								</CarouselItemTitle>
								<CarouselItemText>{text}</CarouselItemText>
							</CarouselItem>
						</CarouselMobileScrollNode>
					))}
				</>
			</CarouselContainer>
			<CarouselButtons>
				{timeLineData.map(({text, year}, index) => (
					<CarouselButton key={index} index={index} active={activeItem} onClick={(e) => handleClick(e, index)}
					                type="button">
						<CarouselButtonDot active={activeItem}/>
					</CarouselButton>
				))}
			</CarouselButtons>
			<SectionDivider/>
		</Section>
	);
};

export default Timeline;