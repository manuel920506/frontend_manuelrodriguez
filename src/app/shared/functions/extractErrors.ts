export function extractErrors(obj: any): string[]{
    const err = obj.error.errors;

    let errorMessages: string[] = [];

    for (let key in err){
        let field = key;
        const messagesWithFields = err[key].map((mensaje: string) => `${field}: ${mensaje}`);
        errorMessages = errorMessages.concat(messagesWithFields);
    }

    return errorMessages;
}

export function extractErrorsIdentity(obj: any): string[]{
    let errorMessages: string[] = [];

    for (let i = 0; i < obj.error.length; i++) {
        const elemento = obj.error[i];
        errorMessages.push(elemento.description);        
    }

    for (let i = 0; i < obj.error.$values.length; i++) {
        const elemento = obj.error.$values[i];
        errorMessages.push(elemento.description);        
    }

    return errorMessages;
}