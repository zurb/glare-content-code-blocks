class UxMetric
  def usability_score(questions)
    task_questions = questions.first

    completion_rate = task_questions['completion_rate']
    errors = task_questions['errors']
    time_on_task = task_questions['time_on_task']

    # Calculate the usability score based on the completion rate and errors
    usability_score = (completion_rate * 100) - (errors * 10)

    # Time efficiency factor, lower is better
    efficiency = (time_on_task / 60)

    {
      completion_rate: completion_rate,
      errors: errors,
      time_on_task: time_on_task,
      usability_score: usability_score,
      efficiency: efficiency
    }
  end
end
