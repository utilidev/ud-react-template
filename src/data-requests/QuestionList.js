export default class QuestionList {
  async getListOfQuestions(unitType, category) {
    return new Promise((res, rej) => {
      //mock hit API and await for callback

      setTimeout(() => {
        res([
          {
            question: "Did you check the something or other",
            type: "Radio Select",
            options: ["yes", "no"]
          },
          {
            question: "Record Beam Pattern Data",
            type: "Text Areas",
            options: ["HF-Dry", "HF-Wet", "LF-Dry", "LF-Wet"]
          },
          {
            question: "Are all items included?",
            type: "Check Box",
            options: ["Command Module", "Ethernet Cable", "Power Supply"]
          }
        ]);
      }, 1000);
    });
  }
}
