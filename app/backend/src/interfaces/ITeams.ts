export interface ITeam {
  teamName: string;
}

export interface ITeamId extends ITeam {
  id: number;
}

export interface IServiceGetAllTeams {
  statusCode: number;
  message: ITeamId[];
}
