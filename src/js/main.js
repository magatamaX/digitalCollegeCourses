import Glide from '@glidejs/glide';
import mgnSmoothScroll from 'mgn-smooth-scroll';
import mgnAccordion from 'mgn-accordion';
import { RemoveClass } from 'mgn-utility';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const SmoothScroll = () => {

    const scroll = new mgnSmoothScroll(
        '.j-smooth-scroll',
        {
            easing: "easeOutQuint",
            posFix: -30,
        }
    );

};


const option = {
    toggleSpeed: 500,
};
    
const Accordion = () => {

    const accordionStart = () => {

        const winWidth = window.innerWidth;

        if ( winWidth <= 640 ) {
            RemoveClass(document.querySelector('.j-accordion2_btn'), 'active');
            RemoveClass(document.querySelector('.j-accordion2_detail'), 'active');
        }

        const accordion1 = new mgnAccordion(".j-accordion1", option);
        const accordion2 = new mgnAccordion(".j-accordion2", option);

        document.querySelector('.j-accordion1_detail .close-button').addEventListener('click', () => {
            accordion1.Close('.j-accordion_close1');
        }, false);
        document.querySelector('.j-accordion2_detail .close-button').addEventListener('click', () => {
            accordion2.Close('.j-accordion_close2');
        }, false)
    }

    accordionStart();

}

const Slide = () => {

    const commonOptions = {
        type: 'carousel',
        startAt: 0,
        perView: 1,
        autoplay: false,
        gap: 0,
        animationDuration: 500,
        animationTimingFunc: 'ease',
        classes: {
            activeNav: 'active',
        }
    };


	if ( document.getElementById('usersCarousel') ){
		const glide__users = new Glide('.glide__users', {
            ...commonOptions
		});

		glide__users.mount();
    }

	if ( document.getElementById('beforeAfterCarousel') ){
		const glide__beforeAfter = new Glide('.glide__beforeAfter', {
            ...commonOptions,
            autoplay: 3000,
            animationDuration: 1000,
		});

		glide__beforeAfter.mount();
    }

	if ( document.getElementById('kvCarousel') ){
		const glide__kv = new Glide('.glide__kv', {
            ...commonOptions,
            autoplay: 3000,
            animationDuration: 1000,
		});

		glide__kv.mount();
	}

}

const Diagnosis = () => {

    const target = document.getElementById('j-diagnosis-app');
    ReactDOM.render(<App />, target);

}

const Init = () => {

    window.addEventListener('load', () => {
        Slide();
        SmoothScroll();
        Accordion();
        Diagnosis();
    }, false);
    
}

Init();
