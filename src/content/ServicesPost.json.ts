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
            desc: 'Professional tree removal. Commercial or residential, we protect your property by removing dangerous trees down to a stump.',
            img: {
                src: '/svg/icons/tree-cutting-icon.svg',
                alt: 'Tree Cutting'
            }
        }, {
            title: 'Trimming',
            desc: 'Trimming improves the health of trees and it prevents dead branches from falling and damaging your property.',
            img: {
                src: '/svg/icons/trimming-icon.svg',
                alt: 'Trimming'
            }
        },
        {
            title: 'Land Clearing',
            desc: 'Town waste management usually will not collect dead wood or removed trees. Call us and we will take care of it.',
            img: {
                src: '/svg/icons/land-clearing-icon.svg',
                alt: 'Land Clearing'
            }
        },
        {
            title: 'Stump Grinding',
            desc: 'Stump removal needs to be done right with special machinery. Call us we have the tools to properly remove a stump without property damage.',
            img: {
                src: '/svg/icons/stump-grinding-icon.svg',
                alt: 'Stump Grinding'
            }
        }, {
            title: 'Elavation',
            desc: 'Ground Elevation to the original elevation of the ground surface prior to cutting or filling.',
            img: {
                src: '/svg/icons/elavation-icon.svg',
                alt: 'Elavation'
            }
        },
        {
            title: 'Topping',
            desc: '',
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