import express from 'express';
import log from './../utils/log';
import models from './../models';

const router = express.Router();

router.post('/', (req, res) => {
  const voterData = req.body;
  // PostGIS accepts coordinates in the order [longitude, latitude]
  const point = {
    type: 'Point',
    coordinates: [voterData.location.lng, voterData.location.lat],
  };
  // Store the JSON point as well to prevent reformatting for all data points
  // on each load of the results page
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
