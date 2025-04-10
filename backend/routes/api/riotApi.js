const express = require('express');
const axios = require('axios');
const { normalizeMatchDataById, normalizeRankedData, normalizeDatabaseMatchData, dbCommitStarter, commitMatches, normalizeDbDataForFrontend, getSummonerFromDb, getSummonerFromRGAPI } = require('../helpers');
const router = express.Router();

const { Summoner, NormalRanking, Ranking, DoubleUpRanking, HyperRollRanking, Participant, Match, MatchParticipants, SummonerMatches, sequelize, Trait, Unit, ParticipantTrait, ParticipantUnit } = require('../../db/models')

const axiosAmericas = axios.create({
  baseURL: "https://americas.api.riotgames.com",
  header: { "Access-Control-Allow_Origin" : "*"}
})

const axiosNA1 = axios.create({
  baseURL: "https://na1.api.riotgames.com/tft",
  header: { "Access-Control-Allow_Origin" : "*"}
})

router.get('/:summoner', async function(req, res, next) {
  const start = Date.now();

  const prelim = await getSummonerFromDb(req.params.summoner)
  // console.log(prelim)

  if (await prelim) {
    const resData = await normalizeDbDataForFrontend(prelim.toJSON())
    res.status(200).send(resData)
    // console.log('preexisting data found in db: ', resData)
    return 
  }

  const summoner = await getSummonerFromRGAPI(req.params.summoner)


  res.status(200).send(summoner.data)

  const backendTime = Date.now()

  const dbData = await Promise.all(summoner.rawMatchList.map( async (match) =>  normalizeDatabaseMatchData(match)))

  // console.log(dbData.summoner)
  dbCommitStarter(summoner.data).then(() => {
    commitMatches(dbData)
  })
  
  // console.log('Backend time: ', (Date.now() - backendTime)/1000 + " seconds")

  return 
})

router.get('/update/:summoner/:match', async function(req, res, next) {
  // console.log("updating summoner...")
  try {
    const summoner = await getSummonerFromRGAPI(req.params.summoner, req.params.match)
  
    res.status(200).send({
      data: summoner.data,
      preProcData: summoner.preProcData
    })

    const backendTime = Date.now()

    const rawMatchList = summoner.rawMatchList.filter(match => match !== null)

    // res.status(200).send()


    const dbData = await Promise.all(rawMatchList.map( async (match) =>  normalizeDatabaseMatchData(match)))
  
    dbCommitStarter(summoner.data).then(() => {
      commitMatches(dbData)
    })
    
    // console.log('Backend time: ', (Date.now() - backendTime)/1000 + " seconds")
    
    
  } catch (error) {
    res.status(400).send("Summoner not found")
  }

  return 
})

module.exports = router;