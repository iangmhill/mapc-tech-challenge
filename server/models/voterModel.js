module.exports = (sequelize, DataTypes) => {
  const Voter = sequelize.define('Voter', {
    // The address for the voter is the primary source of truth
    address: {
      type: DataTypes.TEXT,
    },
    // The latitude and longitude is geocoded from the address
    point: {
      type: DataTypes.GEOMETRY('POINT'),
    },
    // The JSON point is formatted for use in the Google Maps API to prevent
    // reformatting for all datapoints on each load of the results page
    jsonPoint: {
      type: DataTypes.JSON,
    },
    // Whether or not the voter supports the candidate
    supportsCandidate: {
      type: DataTypes.BOOLEAN,
    },
  }, {
    // Define the table's name
    tableName: 'voters',
  });

  return Voter;
};
