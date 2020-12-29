const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
    default: 'Имя',
  },

  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
    default: 'О себе',
  },
  avatar: {
    type: String,
    validate: {
      validator(v) {
        return /https?:\/\/((\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})|((w{3}\.)*[\w.-]+\.[a-z]{2,3}))(:[1-9]\d{1,4})*(\/)?(([\w]{1,}(\/)?)+(#)?)?/.test(v);
      },
      message: 'Ссылка невалидна',
    },
    required: true,
  },
});

module.exports = mongoose.model('user', userSchema);
