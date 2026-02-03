export default {
  types: {
    feat: { title: '🚀 New Features', semver: 'minor' },
    fix: { title: '🩹 Bug Fixes', semver: 'patch' },
    docs: { title: '📖 Documentation' },
    style: { title: '🎨 Code Style' },
    refactor: { title: '💅 Refactors' },
    perf: { title: '🔥 Performance Improvements' },
    test: { title: '✅ Tests' },
    build: { title: '📦 Build' },
    ci: { title: '🤖 CI' },
    chore: { title: '🏡 Chore' },
    revert: { title: '⏪ Revert' }
  },
  scopeMap: {},
  tokens: {
    github: process.env.CHANGELOGEN_TOKENS_GITHUB || process.env.GITHUB_TOKEN || process.env.GH_TOKEN
  },
  templates: {
    commitMessage: 'chore(release): v{{newVersion}}',
    tagMessage: 'v{{newVersion}}',
    tagBody: 'v{{newVersion}}'
  },
  noAuthors: true,
}