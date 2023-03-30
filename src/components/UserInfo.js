export default class UserInfo {
  constructor({profileName, profileJob, profileAvatar}) {
    this._forename = profileName;
    this._job = profileJob;
    this._avatar = profileAvatar;
  };

  getUserInfo() {
    return {
      forename: this._forename.textContent,
      job: this._job.textContent,
      avatar: this._avatar.src,
    };
  };

  setUserInfo({forename, job, avatar}) {
    this._forename.textContent = forename;
    this._job.textContent = job;
    this._avatar.src = avatar;
  };
}
