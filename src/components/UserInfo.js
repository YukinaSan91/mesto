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

  setUserInfo({name, about}) {
    this._forename.textContent = name;
    this._job.textContent = about;
  };

  setUserAvatar({avatar}) {
    this._avatar.src = avatar;
  };
}
