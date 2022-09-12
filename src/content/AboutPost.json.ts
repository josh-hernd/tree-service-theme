import type { CurrentPost, TwoCol } from "$lib/types/ComponentTypes";

const AboutExcerpt: CurrentPost = {
    parent: 'Home » About Us',
    title: 'About Us',
    backImage: '/jpg/active-post.jpeg'
}

const AboutPost: TwoCol = {
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
    }
}

export {
    AboutExcerpt,
    AboutPost
}