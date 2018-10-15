export default class CategoryList {
  async getListOfCategories(unitType) {
    return new Promise((res, rej) => {
      //mock hit API and await for callback

      setTimeout(() => {
        res([
          "Visual Inspection",
          "Initial Assessment",
          "Repairs",
          "Standard Maintenance"
        ]);
      }, 1000);
    });
  }
}
