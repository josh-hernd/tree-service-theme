import type { NavElements } from "$lib/types/ComponentTypes"

const navContent: NavElements = {
    navLinks: [
    {
        href: '/',
        title: 'Home'
    },
    {
        href: '/about',
        title: 'About'
    },
    {
        href: '/services',
        title: 'Services'
    }
],
logo: {
    src: '/svg/logo.svg',
    desc: 'Main Logo',
    size: '90px'
},
ctaButton: {
    cta: 'Contact',
    action: 'tel:410-913-9427'
}
}
export {
    navContent
}