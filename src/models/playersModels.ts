export class Player {
  firstname: string;
  lastname: string;
  shortname: string;
  sex: string;
  country: {
    picture: string;
    code: string;
  };
  picture: string;
  data: {
    rank: number;
    points: number;
    weight: number;
    height: number;
    age: number;
    last: number[];
  };

  constructor(player: any) {
    this.firstname = player.firstname || '';
    this.lastname = player.lastname || '';
    this.shortname = player.shortname || '';
    this.sex = player.sex || '';
    this.country = {
      picture: player.country.picture || '',
      code: player.country.code || '',
    };
    this.picture = player.picture || '';
    this.data = {
      rank: player.data.rank || 0,
      points: player.data.points || 0,
      weight: player.data.weight / 1000 || 0,
      height: player.data.height || 0,
      age: player.data.age || 0,
      last: player.data.last || [],
    };
  }

  getFullName(): string {
    return `${this.firstname} ${this.lastname}`;
  }

  getCountryUrl(): string {
    return this.country.picture;
  }

  getPictureUrl(): string {
    return this.picture;
  }

  getWinsLosses(): {wins: number; losses: number} {
    let wins = 0;
    let losses = 0;
    this.data.last.forEach(score => {
      if (score > 0) wins += 1;
      else losses += 1;
    });
    return {wins, losses};
  }
}
