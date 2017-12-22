module.exports = (sequelize, DataTypes) => {
  const Voter = sequelize.define('Voter', {
    address: {
      type: DataTypes.TEXT,
    },
    location: {
      type: DataTypes.GEOMETRY('POINT'),
    },
    supportsCandidate: {
      type: DataTypes.BOOLEAN,
    },
  }, {
    // define the table's name
    tableName: 'voters',
  });

  return Voter;
};
