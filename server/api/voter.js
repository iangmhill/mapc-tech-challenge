import express from 'express';
import log from './../utils/log';
import models from './../models';

const router = express.Router();

/**
 * API endpoint for POSTing a new voter response.
 */
router.post('/', (req, res) => {
  const voterData = req.body;
  // Return false if any data is missing
  if (!voterData.address || !voterData.location || !voterData.location.lng ||
      !voterData.location.lat ||
      typeof (voterData.supportsCandidate) === 'undefined') {
    return res.json({ success: false });
  }
  // PostGIS accepts coordinates in the order [longitude, latitude]
  const point = {
    type: 'Point',
    coordinates: [voterData.location.lng, voterData.location.lat],
  };
  // Add voter to the database and store the JSON point as well to avoid
  // reformatting for all data points on each load of the results page
  return models.Voter.create({
    address: voterData.address,
    point,
    jsonPoint: voterData.location,
    supportsCandidate: voterData.supportsCandidate,
  })
  .then(() => res.json({ success: true }))
  .catch((err) => {
    log.error(err);
    return res.json({ success: false });
  });
});

/**
 * API endpoint for fetching all voter responses. Limits fields returned to only
 * those necessary for plotting the data.
 */
router.get('/', (req, res) =>
  models.Voter.findAll({
    attributes: ['address', 'jsonPoint', 'supportsCandidate'],
    raw: true,
  })
  .then(voters => res.json({ success: true, voters }))
  .catch((err) => {
    log.error(err);
    return res.json({ success: false });
  })
);

export default router;
