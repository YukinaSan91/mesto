export default class UserInfo {
  constructor({profileName, profileJob}) {
    this._forename = profileName;
    this._job = profileJob;
  };

  getUserInfo() {
    return {
      forename: this._forename.textContent,
      job: this._job.textContent,
    };
  };

  setUserInfo({forename, job}) {
    this._forename.textContent = forename;
    this._job.textContent = job;
  };
}
