import * as app from '..';

export class Rd {
  constructor(
    private readonly core: app.Core,
    private readonly maximumDistance = 250) {}

  async updateAsync(localPlayer: app.Player, players: Array<app.Player>, mode?: string) {
    const pointers: Array<app.Pointer> = [];
    this.collectChanges(localPlayer, players, pointers, mode);
    await this.core.process.batch(pointers).writeAsync();  
  }

  private collectChanges(localPlayer: app.Player, players: Array<app.Player>, pointers: Array<app.Pointer>, mode?: string) {
    for (const x of players) {


      if (x.ThirdPersona.value !== 1 || x.ThirdPerson.value !== 1) {
          x.ThirdPersona.value = 1;
          x.ThirdPerson.value = 1; 
          pointers.push(x.ThirdPerson, x.ThirdPersona);             
        }
      }
    }
  }
