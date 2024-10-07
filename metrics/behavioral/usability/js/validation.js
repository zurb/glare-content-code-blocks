function isValidUsabilityQuestions(questions) {
  const taskQuestion = questions[0];

  // Validate the necessary fields for usability data
  if (!taskQuestion.completion_rate || !taskQuestion.errors || !taskQuestion.time_on_task) {
    return false;
  }

  // Ensure that completion rate and errors are within reasonable bounds
  if (taskQuestion.completion_rate > 1 || taskQuestion.completion_rate < 0 || taskQuestion.errors < 0) {
    return false;
  }

  return true;
}
