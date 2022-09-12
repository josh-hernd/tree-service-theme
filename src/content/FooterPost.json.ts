import type { FooterTypes } from "$lib/types/ComponentTypes";

const FooterContent: FooterTypes = {
    additionals: {
        noActions: {
            logo: '/svg/logo-colored.svg',
            desc: 'Emergency Service. If you have a fallen tree endangering you and your property, call the experts!'
        },
        actions: [
            {
                title: 'Give Us A Call.',
                label: '410-913-9427',
                href: 'tel:410-913-9427',
                target: false,
                icon: 'carbon:phone-voice-filled'
            },
            {
                title: 'Get Directions',
                label: '3 Wellhaven Cir, Owings Mills, MD 21117',
                href: 'https://goo.gl/maps/Kg75XpSKU9KXPHM76',
                target: true,
                icon: 'entypo:location-pin'
            },
            {
                title: 'Write Us',
                label: 'randystreeservicemd@gmail.com',
                href: 'mailto:randystreeservicemd@gmail.com',
                target: false,
                icon: 'fluent:mail-16-filled'
            },
            {
                title: "We're Open",
                label: 'Mon thru Sat: 8:00 am - 6:00 pm',
                target: false,
                icon: 'fa6-solid:clock'
            }
        ],
        copyrights: "Copyright © Randy's Tree Service"
    }
};
export {
    FooterContent
}