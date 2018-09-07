const camelCaseToKebabCase = string => string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()

export function createRules(cssConfig) {

    const rules = Object.keys(cssConfig).reduce((current, next) => {

        const declarations = Object.keys(cssConfig[next])
            .map(key => `\n\t${camelCaseToKebabCase(key)}: ${cssConfig[next][key]};`)

        return current += `\n.${next} {${declarations.join(' ')}}`

    }, '');

    return rules;
    
}

export function createStyles(cssConfig) {

    const rules = createRules(cssConfig);

    return `
        <style>${rules}</style>
    `
}