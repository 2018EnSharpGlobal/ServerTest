const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
     id: String,
     password: String
});

userSchema.methods.comparePassword = function(inputPassword, cb) {
     if(inputPassword === this.password) {
          cb(null, true);
     } else {
          cb('error');
     }
};

module.exports = mongoose.model('users', userSchema, 'users');
//현재 코드에는 비밀번호를 평문 그대로 저장하고, 비교할 때도 평문끼리 비교하고 있는데
//실제 배포 단계에서는 절대로 이래서는 안 됨
//암호화 강좌를 들어보
