// INTERFACE INVOCATIONS

// Navigation
interface NavElements {
    navLinks: Array<{
        href: string,
        title: string
    }>,
    logo: {
        src?: string,
        desc?: string,
        size?: string
    },
    ctaButton: {
        cta?: string;
        action?: string;
    }
}

// Button 
interface ButtonContext {
    cta: string;
    action: string;
    alignment: AlignButton;
}

// Text 
interface LeadTitle {
    lead: string,
    title: string,
    body?: {
        tabbed?: string,
        normal?: string
    }
}

// Scrollable Section
interface ScrollableSection {
    lead: string,
    title: string,
    blurbs: BlurbsArray
}

// Full Gallery Section 
interface FullGallerySection {
    lead: string,
    title: string,
    gallery: Array<{
        src: string,
        desc: string
    }>
}

// Simple Section
interface SimpleSection {
    title: string,
    body: string,
    backImgSrc: string,
    button: {
        cta: string,
        action: string
    }
}

// Current Post Header
interface CurrentPost {
    parent: string,
    title: string,
    backImage: string
}

// Three Col Section
interface ThreeColSection {
    lead: string,
    title: string,
    list: Array<string>
}

// Contact Section

interface ContactContextType {
    lead: string,
    title: string,
    desc: string,
    blurbs: Array<{
            title: string,
            label: string,
            href: string,
            target: boolean,
            icon: string
    }>,
    buildForm: InputField[]
}

// Footer Elements
interface FooterTypes {
    additionals: {
        noActions?: {
            logo: string,
            desc: string,
        }
        actions?: Array<{
            title: string,
            label: string,
            href?: string,
            target?: boolean,
            icon?: string
        }>,
        copyrights: string
    }
}

interface OnPage {
    title?: string,
    desc?: string,
    keywords?: string,
    og_image?: string
}

// Form Type
const _number = 0;

type RulesList =
	| 'required'
	| `min:${typeof _number}`
	| `max:${typeof _number}`
	| 'email'
	| 'between'
	| 'file'
	| 'equal'
	| 'url'
	| { name: string; fnc: () => Promise<boolean> };

interface InputField {
	type: 'input' | 'date' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'file' | 'autocomplete';
	name: string;
	value?: unknown;
	attributes: Attributes;
	messages?: unknown;
	validation?: unknown;
    rules?: RulesList[]
}

interface Attributes {
    id: string;
	type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'range';
	label?: string;
	classes?: string[];
	placeholder?: string;
    disabled?: boolean;
    min?: number;
	max?: number;
	rows?: number;
	cols?: number;
}

// TYPE INVOCATIONS

// Blurb
type BlurbsArray = Array<{
    title: string,
    desc?: string,
    img: {
        src: string,
        alt: string
    }
}>


// Two Colunm Section
type TwoCol = {
    overlapImg: {
        underLap: {
            src: string,
            alt: string
        },
        overlap: {
            src: string,
            alt: string
        },
        backImg: {
            src: string,
            alt: string
        }
    },
    lead: string,
    title: string,
    body: LeadTitle["body"],
    ctaBtn?: {
        cta: string,
        action: string
    }
}

// Full Hero Section 
type HeroType = {
    subtitle?: string,
    heroTitle?: string,
    ctaBtn: {
        cta?: string,
        action?: string
    },
    imgConst: {
        src?: string,
        alt?: string
    }
}

// Button Alignment
type AlignButton = keyof {
    up: 'UP',
    down: 'DOWN',
    left: 'LEFT',
    center: 'CENTER',
    right: 'RIGHT',
    centerRight: 'CENTER RIGHT'
};

export {
    type OnPage,
    type NavElements,
    type HeroType,
    type AlignButton,
    type ButtonContext,
    type TwoCol,
    type LeadTitle,
    type ScrollableSection,
    type BlurbsArray,
    type FullGallerySection,
    type SimpleSection,
    type ContactContextType,
    type CurrentPost,
    type ThreeColSection,
    type FooterTypes,
    type InputField
}