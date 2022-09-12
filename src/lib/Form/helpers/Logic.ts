import type { InputField } from "$lib/types/ComponentTypes";

const isRequired = (field: InputField): boolean => {
    if (field.rules) {
        if (field.rules.length > 0) {
            return true;
        }
    }
    return false;
}

export {
    isRequired
}