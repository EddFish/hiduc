import React from 'react';
import {storyId, storyPic, storyTellerName, storyText} from "../../Utils/Constants";
import SuccessStories from "./SuccessStories";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Slider = () => {
    const createStoriesArray = () => {
        let val = [];
        for (let i = 0; i < storyTellerName.length; i++){
            val.push({"id":storyId[i], "picStory": storyPic[i], "storyTellerName": storyTellerName[i], "textStory": storyText[i]});
        }
        return val;

    }
    let values = createStoriesArray().map((v) => <SuccessStories key={v.id} storyPic={v.picStory}
                                                                   storyTellerName={v.storyTellerName} storyText={v.textStory} />);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1200 },
            items: 4,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1200, min: 900 },
            items: 3,
            slidesToSlide: 1
        },

        pad: {
            breakpoint: { max: 900, min: 600},
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

        return (
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={'this.props.deviceType !== "mobile" ? true : false'}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                focusOnSelect={true}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={'this.props.deviceType'}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {values}
            </Carousel>
        );
    };
    export default Slider;