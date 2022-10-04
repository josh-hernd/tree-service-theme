import type { CurrentPost, OnPage, TwoCol } from "$lib/types/ComponentTypes";

const PostOnPage: OnPage = {
    title: "About: Randy's Tree Service",
    desc: "Randy's Tree Service is proud to provide the highest tree care in Maryland. Our team of tree care experts are consistently trained to look out for every single detail.",
    keywords: 'tree removal companies, tree removal service near me, tree cutting service, tree cutting service near me, tree removal service, tree removal service near me, tree trimming service near me',
    og_image: '/jpg/tree-service-solutions.jpeg'
}

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
    PostOnPage,
    AboutExcerpt,
    AboutPost
}