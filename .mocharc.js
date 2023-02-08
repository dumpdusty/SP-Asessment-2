module.exports = {
    spec: 'tests/**/*.js',
    exclude: "tests/general.js",
    file: `config/global-hook.js`,
    timeout: '10000',
    reporter: 'mochawesome',
    reporterOptions: ['reportDir=MyReports', 'reportFilename=updatedReport','json=false']
}
