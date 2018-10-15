export default class UnitList {
  async getListOfUnits() {
    return new Promise((res, rej) => {
      //mock hit API and await for callback

      setTimeout(() => {
        res(["ARIS", "AR2", "AR3", "Defender", "Voyager"]);
      }, 1000);
    });
  }
}
