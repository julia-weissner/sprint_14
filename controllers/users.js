const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch((err) => res.status(500).send({ message: `На сервере произошла ошибка ${err}` }));
};

module.exports.getUserById = (req, res) => {
  const userId = req.params.id;
  User.findById(userId)
    .orFail(new Error('Not Found'))
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.message === 'Not Found') {
        res.status(404).send({ message: 'Пользователя с таким id нет в базе данных' });
      } else if (err.name === 'CastError') {
        res.status(400).send({ message: 'Переданы невалидные данные' });
      } else {
        res.status(500).send({ message: 'На сервере произошла ошибка' });
      }
    });
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })

    .then((user) => res.send({ data: user }))
    .catch((err) => {
      res.status(400).send({ message: `Ошибка валидации ${err}` });
    });
};
