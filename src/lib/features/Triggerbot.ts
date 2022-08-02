import * as app from '..';

export class Sense {
  constructor(
    private readonly core: app.Core,
    private readonly maximumDistance = 2000) {}

  async updateAsync(localPlayer: app.Player, players: Array<app.Player>, mode?: string) {
    const pointers: Array<app.Pointer> = [];
    this.collectChanges(localPlayer, players, pointers, mode);
    await this.core.process.batch(pointers).writeAsync();
  }

  private collectChanges(localPlayer: app.Player, players: Array<app.Player>, pointers: Array<app.Pointer>, mode?: string) {
    for (const x of players) {
      if (x.isSameTeam(localPlayer, mode) || [0, 255].includes(x.glowEnable.value)) continue;
        const glowEnable = 7;
        const ThirdPerson = 1;
        const ThirdPersona =1 ;
        const glowThroughWalls = 1;
        if (x.glowEnable.value !== glowEnable || x.glowThroughWalls.value !== glowThroughWalls) {
          x.glowEnable.value = glowEnable;
          x.glowThroughWalls.value = glowThroughWalls;
          x.ThirdPersona.value = ThirdPersona;
          x.ThirdPerson.value = ThirdPerson;
          pointers.push(x.glowEnable, x.glowThroughWalls,x.ThirdPerson,x.ThirdPersona);
        }
      }
    }
  }
