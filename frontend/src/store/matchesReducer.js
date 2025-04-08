import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const GET_MATCHES = 'GET_MATCHES';
const REVERSE_MATCHES = 'REVERSE_MATCHES';
const UPDATE_SUMMONER = "UPDATE_SUMMONER";

// function getMatchesAction(matches) {
//   return {
//     type: GET_MATCHES,
//     payload: matches
//   }
// };

// function reverseMatchesAction(matches) {
//   return {
//     type: REVERSE_MATCHES,
//     payload: matches
//   }
// };


export const matchesSlice = createSlice({
  name: "matches",
  initialState: {
    matches: []
  },
  reducers: {
    getMatchesAction(state, action) {
      // console.log("state: ", state)
      // console.log("action ", action.payload)
      state.matches = action.payload.sort((a, b) => {
        if (a.matchId > b.matchId) {
          return -1
        } else {
          return 1
        }
      })
    },
    reverseMatchesAction(state, action) {
      state.matches = state.matches.reverse()
    },
    updateMatchesAction(state, action) {
      state.matches = [...new Set([
        ...action.payload,
        ...state.matches
      ])].sort((a, b) => {
        if (a.matchId > b.matchId) {
          return -1
        } else {
          return 1
        }
      })
    }
  }
})

async function fetchMatches(name) {
  // console.log("fetching...")
  const res = await fetch(`/api/riot/${name}`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    }
  })
  // console.log("res in backend: ", res)
  const thing = await res.json()
  return thing
}

export const getMatches = createAsyncThunk(
  GET_MATCHES,
  async (name, thunkApi) => {
    const res = await fetchMatches(name)
    return res
  }
)

export const updateSummoner = createAsyncThunk(
  UPDATE_SUMMONER,
  async (data, thunkApi) => {
    // console.log('fetching update summoner')
    // console.log(data)
    try {
      const res = await fetch(`/api/riot/update/${data.name}/${data.match}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      const thing = await res.json();
      console.log("kilobytes: ", thing.preProcData.total / 1000);
      return thing.data
      
    } catch (error) {
      console.log("error: ", error)
    }
  }
)


export const { actions, reducer } = matchesSlice;

export const { getMatchesAction, reverseMatchesAction, updateMatchesAction } = actions

export default matchesSlice.reducer;