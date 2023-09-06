function sample(text: string): never | string {
    if(typeof text !== 'string') {
        throw new Error('text must be a string');
    }
    return text;
}

console.log(sample('Hello World'));