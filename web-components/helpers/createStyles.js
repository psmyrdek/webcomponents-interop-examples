const camelCaseToKebabCase = string => string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()

/*
* Converts object representation of css rules into string you can append to DOM.
*/
export function createStyles(cssConfig) {

    const styles = Object.keys(cssConfig).reduce((current, next) => {

        const declarations = Object.keys(cssConfig[next])
            .map(key => `\n\t${camelCaseToKebabCase(key)}: ${cssConfig[next][key]};`)

        return current += `\n.${next} {${declarations.join(' ')}}`

    }, '');

    return `
        <style>${styles}</style>
    `
}