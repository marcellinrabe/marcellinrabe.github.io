export class EmptyFormError extends Error {
    constructor(message) {
        super(message);
        this.name = 'EmptyFormError';
    }
}
