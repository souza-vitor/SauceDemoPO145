const options = {
    theme: 'bootstrap',
    jsonFile: 'cucumber-report.json',
    output: 'cucumber-report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
}

report.generate(options)