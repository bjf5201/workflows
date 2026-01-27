const Configuration = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        'header-max-length': [2, 'always', 100],
        'body-leading-blank': [2, 'always'],
        'footer-leading-blank': [2, 'always'],
        'body-empty': [2, 'never'],
        'subject-min-length': [2, 'always', 30]
    }
}

export default Configuration;