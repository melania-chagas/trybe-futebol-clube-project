const matchesMock = [
  {
    "id": 1,
    "homeTeam": 16,
    "homeTeamGoals": 1,
    "awayTeam": 8,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "teamName": "São Paulo"
    },
    "teamAway": {
      "teamName": "Grêmio"
    }
  },
  {
    "id": 2,
    "homeTeam": 9,
    "homeTeamGoals": 1,
    "awayTeam": 14,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "teamName": "Internacional"
    },
    "teamAway": {
      "teamName": "Santos"
    }
  },
  {
    "id": 3,
    "homeTeam": 4,
    "homeTeamGoals": 3,
    "awayTeam": 11,
    "awayTeamGoals": 0,
    "inProgress": false,
    "teamHome": {
      "teamName": "Corinthians"
    },
    "teamAway": {
      "teamName": "Napoli-SC"
    }
  },
  {
    "id": 4,
    "homeTeam": 3,
    "homeTeamGoals": 0,
    "awayTeam": 2,
    "awayTeamGoals": 0,
    "inProgress": false,
    "teamHome": {
      "teamName": "Botafogo"
    },
    "teamAway": {
      "teamName": "Bahia"
    }
  },
  {
    "id": 5,
    "homeTeam": 7,
    "homeTeamGoals": 1,
    "awayTeam": 10,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "teamName": "Flamengo"
    },
    "teamAway": {
      "teamName": "Minas Brasília"
    }
  },
  {
    "id": 6,
    "homeTeam": 5,
    "homeTeamGoals": 1,
    "awayTeam": 13,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "teamName": "Cruzeiro"
    },
    "teamAway": {
      "teamName": "Real Brasília"
    }
  },
];

const matchesInProgressMock = [
  {
    "id": 41,
    "homeTeam": 16,
    "homeTeamGoals": 2,
    "awayTeam": 9,
    "awayTeamGoals": 0,
    "inProgress": true,
    "teamHome": {
      "teamName": "São Paulo"
    },
    "teamAway": {
      "teamName": "Internacional"
    }
  },
  {
    "id": 42,
    "homeTeam": 6,
    "homeTeamGoals": 1,
    "awayTeam": 1,
    "awayTeamGoals": 0,
    "inProgress": true,
    "teamHome": {
      "teamName": "Ferroviária"
    },
    "teamAway": {
      "teamName": "Avaí/Kindermann"
    }
  },
  {
    "id": 43,
    "homeTeam": 11,
    "homeTeamGoals": 0,
    "awayTeam": 10,
    "awayTeamGoals": 0,
    "inProgress": true,
    "teamHome": {
      "teamName": "Napoli-SC"
    },
    "teamAway": {
      "teamName": "Minas Brasília"
    }
  },
  {
    "id": 44,
    "homeTeam": 7,
    "homeTeamGoals": 2,
    "awayTeam": 15,
    "awayTeamGoals": 2,
    "inProgress": true,
    "teamHome": {
      "teamName": "Flamengo"
    },
    "teamAway": {
      "teamName": "São José-SP"
    }
  },
  {
    "id": 45,
    "homeTeam": 5,
    "homeTeamGoals": 1,
    "awayTeam": 3,
    "awayTeamGoals": 1,
    "inProgress": true,
    "teamHome": {
      "teamName": "Cruzeiro"
    },
    "teamAway": {
      "teamName": "Botafogo"
    }
  },
  {
    "id": 46,
    "homeTeam": 4,
    "homeTeamGoals": 1,
    "awayTeam": 12,
    "awayTeamGoals": 1,
    "inProgress": true,
    "teamHome": {
      "teamName": "Corinthians"
    },
    "teamAway": {
      "teamName": "Palmeiras"
    }
  },
  {
    "id": 47,
    "homeTeam": 8,
    "homeTeamGoals": 1,
    "awayTeam": 14,
    "awayTeamGoals": 2,
    "inProgress": true,
    "teamHome": {
      "teamName": "Grêmio"
    },
    "teamAway": {
      "teamName": "Santos"
    }
  },
  {
    "id": 48,
    "homeTeam": 13,
    "homeTeamGoals": 1,
    "awayTeam": 2,
    "awayTeamGoals": 1,
    "inProgress": true,
    "teamHome": {
      "teamName": "Real Brasília"
    },
    "teamAway": {
      "teamName": "Bahia"
    }
  }
]

const matchMock = {
  id: 47,
  homeTeam: 8,
  homeTeamGoals: 1,
  awayTeam: 14,
  awayTeamGoal: 2,
  inProgress: true,
}

const equalTeamsMock = {
  homeTeam: 8,
  awayTeam: 8,
}

const teamsMock = {
  homeTeam: 5,
  awayTeam: 8,
}

const loginMock = {
  "email": "admin@admin.com",
  "password": "secret_admin"
}

export {
  matchesMock,
  matchesInProgressMock,
  matchMock,
  equalTeamsMock,
  teamsMock,
  loginMock,
};