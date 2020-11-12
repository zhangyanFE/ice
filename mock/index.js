module.exports = {
  '/api/users/1': { data: {} },
  // 支持参数
  'POST /api/users/:id': (req, res) => {
    const { id } = req.params;
    res.send({ id: id });
  },
};
