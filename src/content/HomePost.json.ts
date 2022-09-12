import type { FullGallerySection, HeroType, ScrollableSection, SimpleSection, TwoCol } from "$lib/types/ComponentTypes";

const HeroConst: HeroType = {
    subtitle: 'Hablamos Español',
    heroTitle: 'Tree Service Solutions',
    ctaBtn: {
        cta: 'Contact',
        action: '#contact'
    },
    imgConst: {
        src: '/jpg/tree-service-solutions.jpeg',
        alt: 'Tree Service Solution'
    }
};

const AboutInsert: TwoCol = {
    overlapImg: {
        underLap: {
            src: '/jpg/branch-trimming.jpeg',
            alt: 'branch-trimming'
        },
        overlap: {
            src: '/jpg/stump-removal.jpeg',
            alt: 'stump-removal'
        },
        backImg: {
            src: '/jpg/dots-background.png',
            alt: 'Dots'
        }
    },
    lead: 'About Us',
    title: 'Quality services & Excellent Results',
    body: {
        tabbed:
            "Randy's Tree Service is proud to provide the highest tree care in Maryland. Our team of tree care experts are consistently trained to look out for every single detail.",
        normal:
            'Whether it\'s a loose branch hanging from a tree after the job is finished or a problem area we spotted on one of your trees, we are literal when we say we do not skip a branch.'
    },
    ctaBtn: {
        cta: 'Read More',
        action: '/about'
    }
}

const ServiceList: ScrollableSection = {
    lead: 'Services',
    title: 'Fallen tree endangering you and your property? <br> We are ready to serve you',
    blurbs: [
        {
            title: 'Tree Cutting',
            img: {
                src: '/svg/icons/tree-cutting-icon.svg',
                alt: 'Tree Cutting'
            }
        }, {
            title: 'Trimming',
            img: {
                src: '/svg/icons/trimming-icon.svg',
                alt: 'Trimming'
            }
        },
        {
            title: 'Land Clearing',
            img: {
                src: '/svg/icons/land-clearing-icon.svg',
                alt: 'Land Clearing'
            }
        },
        {
            title: 'Stump Grinding',
            img: {
                src: '/svg/icons/stump-grinding-icon.svg',
                alt: 'Stump Grinding'
            }
        }, {
            title: 'Elavation',
            img: {
                src: '/svg/icons/elavation-icon.svg',
                alt: 'Elavation'
            }
        },
        {
            title: 'Topping',
            img: {
                src: '/svg/icons/topping-icon.svg',
                alt: 'Topping'
            }
        }
    ]
}

const PostGallery: FullGallerySection = {
    lead: 'Our Work',
    title: 'We are fully equipped ready to serve you',
    gallery: [
        {
            src: '/jpg/gallery/img-blob-0.jpeg',
            desc: 'Our Work'
        },
        {
            src: '/jpg/gallery/img-blob-1.jpeg',
            desc: 'Our Work'
        },
        {
            src: '/jpg/gallery/img-blob-2.jpeg',
            desc: 'Our Work'
        },
        {
            src: '/jpg/gallery/img-blob-3.jpeg',
            desc: 'Our Work'
        },
        {
            src: '/jpg/gallery/img-blob-4.jpeg',
            desc: 'Our Work'
        },
        {
            src: '/jpg/gallery/img-blob-5.jpeg',
            desc: 'Our Work'
        }
    ]
};

const simpleSection: SimpleSection = {
    title: 'Licensed and Insured',
    body: 'We guarantee you less worries. We are licensed experts acting according to all regulations and laws, protecting you.',
    backImgSrc: '/jpg/chainsaw-background.jpeg',
    button: {
        cta: 'Call Now',
        action: 'tel:410-913-9427'
    }
}

export {
    HeroConst,
    AboutInsert,
    ServiceList,
    PostGallery,
    simpleSection
}