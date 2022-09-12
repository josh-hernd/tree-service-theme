import type { CurrentPost, ScrollableSection, ThreeColSection } from "$lib/types/ComponentTypes";

const ServiceExcerpt: CurrentPost = {
    parent: 'Home » Services',
    title: 'Services',
    backImage: '/jpg/active-post.jpeg'
}

const CredentialPost: ThreeColSection = {
    lead: 'Professional Services',
    title: 'We guarantee quality work',
    list: ['Residential & Commercial', 'Licensed & Insured', 'Professional & reliable']
}

const ServicePost: ScrollableSection = {
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

export {
    ServiceExcerpt,
    CredentialPost,
    ServicePost
}