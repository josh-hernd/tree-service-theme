import type { ContactContextType } from "$lib/types/ComponentTypes";

const ContactPost: ContactContextType = {
    lead: 'Contact Us',
    title: 'Leave Us a Message',
    desc: 'Email us with any questions regarding your tree issues and we will make a brief estimate, just fill in the required information in the following form.',
    blurbs: [
        {
            title: 'Give Us A Call.',
            label: '410-913-9427',
            href: 'tel:410-913-9427',
            target: false,
            icon: 'carbon:phone-voice-filled'
        },
        {
            title: 'Write Us',
            label: 'randystreeservicemd@gmail.com',
            href: 'mailto:randystreeservicemd@gmail.com',
            target: false,
            icon: 'fluent:mail-16-filled'
        }
    ],
    buildForm: [
    {
        type: 'input', // required
        name: 'name-firts-last', // required
        value: '', // optional
        attributes: {
            type: 'text', // default = text, or password, email, number, tel, optional
            id: 'name-firts-last', // optional
            classes: ['form-control'], // optional
            label: 'Firft, Last Name', // optional
            disabled: false // optional
        },
        rules: ['required']
    },
    {
        type: 'input', // required
        name: 'client-email', // required
        value: '', // optional
        attributes: {
            type: 'email', // default = text, or password, email, number, tel, optional
            id: 'client-email', // optional
            classes: ['form-control'], // optional
            label: 'Email', // optional
            disabled: false // optional
        },
        rules: ['required']
    },
    {
        type: 'input', // required
        name: 'client-phone', // required
        value: '', // optional
        attributes: {
            type: 'tel', // default = text, or password, email, number, tel, optional
            id: 'client-phone', // optional
            classes: ['form-control'], // optional
            label: 'Phone', // optional
            disabled: false // optional
        },
        rules: ['required']
    },
    {
        type: 'input', // required
        name: 'service-type', // required
        value: '', // optional
        attributes: {
            type: 'text', // default = text, or password, email, number, tel, optional
            id: 'client-phone', // optional
            classes: ['form-control'], // optional
            label: 'Service Needed', // optional
            disabled: false // optional
        },
        rules: ['required']
    },
    {
        type: 'textarea', // required
        name: 'additional-info', // required
        value: '', // optional
        attributes: {
            type: 'text', // default = text, or password, email, number, tel, optional
            id: 'id-field-text', // optional
            classes: ['form-control'], // optional
            label: 'Additional Information', // optional
            disabled: false // optional
        }
    }
]
};

export {
    ContactPost
}