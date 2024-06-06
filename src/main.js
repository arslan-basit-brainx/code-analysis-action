const core = require('@actions/core')
const github = require('@actions/github')
const fs = require('fs')

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
async function run() {
  try {

    let text = fs.readFileSync('./report.txt')
    core.info(`Text from file ${text}`)
  } catch (error) {
    // Fail the workflow step if an error occurs
    core.setFailed(error.message)
  }
}

module.exports = {
  run
}
