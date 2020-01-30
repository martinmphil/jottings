interface QuestionText {
  scenarioText: string;
  optText1: string;
  optText2: string;
  optText3: string;
  optText4: string;
}

const SampleQuestionText: QuestionText = {
  scenarioText:
    "You have recently taken a call from a customer praising the helpful service offered by a colleague in your team. Do you:",
  optText1: "Tell your colleague about the feedback on a one-to-one basis.",
  optText2: "Inform your team leader and let them give the praise personally.",
  optText3:
    "Wait until the team meeting tomorrow and announce the feedback to everyone.",
  optText4:
    "Email the whole company so that everyone hears about the great feedback."
};

export default SampleQuestionText;
