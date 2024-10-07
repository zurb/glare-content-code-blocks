function translateUsabilityScore(score) {
  if (score.completion_rate > 0.9 && score.errors < 2 && score.time_on_task < 30) return 'High';
  else if (score.completion_rate >= 0.7 && score.errors < 5 && score.time_on_task < 60) return 'Moderate';
  else return 'Low';
}
