interface IScenario {
  situation: string;
  optionText: string[];
  best: number;
  worst: number;
}

interface IExam {
  title: string;
  scenarios: IScenario[];
}

interface QuestionText {
  scenarioText: any;
  optTextA: any;
  optTextB: any;
  optTextC: any;
  optTextD: any;
}

const q1Text: QuestionText = {
  scenarioText:
    "You take a call from a customer praising the helpful service offered by a colleague in your team. Do you:",
  optTextA: "Tell your colleague about the feedback on a one-to-one basis.",
  optTextB: "Inform your team leader and let them relay the praise personally.",
  optTextC:
    "Wait until the team meeting tomorrow and announce the feedback to everyone.",
  optTextD:
    "Email the whole company so that everyone hears about this great feedback."
};

const q2Text: QuestionText = {
  scenarioText:
    "You are working on a task for a senior manager that is due to be completed today. Another colleague asks you to update a spreadsheet urgently. This will take three hours. However, you only have an hour spare today if you are going to complete the task for the senior manager by the deadline. Therefore, updating the spreadsheet will delay the task you are working on for the senior manager. Do you:",
  optTextA:
    "Ask your colleague to contact your manager as you’re already busy on another task and perhaps your manager could task someone else to help.",
  optTextB:
    "Update the spreadsheet for your colleague as it is urgent and then move to the task for the senior manager as soon as you finish.",
  optTextC:
    "Talk to the senior manager and ask if you can extend their deadline as you need to complete an urgent task for another colleague.",
  optTextD:
    "Explain to your colleague that you can help, but you only have an hour available today so you will not be able to complete all of the updates today."
};

const q3Text: QuestionText = {
  scenarioText:
    "You take a call from a different energy supplier, who explains they are opening a new account for a customer and they need the final meter readings from the account the customer currently has with you. Do you:",
  optTextA:
    "Give them the most recent meter readings from the account and pass the account details to the appropriate team to close.",
  optTextB:
    "Offer to call them back, then phone the customer to verify the final meter readings.",
  optTextC:
    "Give them the most recent meter readings and phone the customer to find out why they are moving suppliers.",
  optTextD:
    "Offer to call them back, phone the customer to verify the final readings and ask them why they are moving suppliers."
};

const q4Text: QuestionText = {
  scenarioText:
    "You are working on a strategy project. You have informal daily meetings with your supportive line manager. Three months in, your manager is suddenly reassigned, leaving you to finish the project on your own. Your only support is the department manager who can only meet with you once a week and is not familiar with the project. Working on your own feels very demotivating. Do you:",
  optTextA:
    "Ask the department manager to identify another line manager who can give you the support you need on the project to complete it.",
  optTextB:
    "Identify the work remaining and ask the department manager to schedule time to help you on key points and keep you on track with deadlines.",
  optTextC:
    "Keep yourself motivated on the project by focusing on the task at hand and use your weekly meetings with the department manager to discuss issues you are unable to resolve.",
  optTextD:
    "Keep your weekly meetings with the department manager focused on your task list and find support from colleagues sitting near you in helping you continue with this role."
};

const SampleExam: IExam = {
  title: "Generalist",
  scenarios: [
    {
      situation: q1Text.scenarioText,
      optionText: [
        q1Text.optTextA,
        q1Text.optTextB,
        q1Text.optTextC,
        q1Text.optTextD
      ],
      best: 0,
      worst: 3
    },
    {
      situation: q2Text.scenarioText,
      optionText: [
        q2Text.optTextA,
        q2Text.optTextB,
        q2Text.optTextC,
        q2Text.optTextD
      ],
      best: 2,
      worst: 1
    },
    {
      situation: q3Text.scenarioText,
      optionText: [
        q3Text.optTextA,
        q3Text.optTextB,
        q3Text.optTextC,
        q3Text.optTextD
      ],
      best: 3,
      worst: 0
    },
    {
      situation: q4Text.scenarioText,
      optionText: [
        q4Text.optTextA,
        q4Text.optTextB,
        q4Text.optTextC,
        q4Text.optTextD
      ],
      best: 1,
      worst: 3
    }
  ]
};

export default SampleExam;
