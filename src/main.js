const core = require('@actions/core')
const github = require('@actions/github')
const fs = require('fs')

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
async function run() {
  try {
    // The `who-to-greet` input is defined in action metadata file
    //const whoToGreet = core.getInput('who-to-greet', { required: true })
    //core.info(`Hello, ${whoToGreet}!`)

    // Get the current time and set as an output
    //const time = new Date().toTimeString()
    //core.setOutput('time', time)

    // Output the payload for debugging
    // core.info(
    //   `The event payload: ${JSON.stringify(github.context.payload, null, 2)}`
    // )

    var text = fs.readFileSync("./report.txt");
    core.info(`Text from file ${text}`)
  } catch (error) {
    // Fail the workflow step if an error occurs
    core.setFailed(error.message)
  }
}

module.exports = {
  run
}
