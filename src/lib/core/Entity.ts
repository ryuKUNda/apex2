import * as app from '..';
import {entityOffsets} from './offsets/entityOffsets';

export abstract class Entity {
  constructor(address: bigint,
    readonly localOrigin = new app.VectorPointer(address + entityOffsets.localOrigin),
    readonly teamNum = new app.UInt8Pointer(address + entityOffsets.iTeamNum),
    readonly name = new app.UInt64Pointer(address + entityOffsets.iName),
    readonly glowColor = new app.ColorPointer(address + entityOffsets.glowColor),
    readonly glowType = new app.EntityGlowPointer(address + entityOffsets.glowType),
    readonly glowEnable = new app.UInt8Pointer(address + entityOffsets.glowEnable),
    readonly in_attack = new app.UInt8Pointer(address + entityOffsets.in_attack),
    readonly ThirdPerson = new app.UInt8Pointer(address + entityOffsets.ThirdPerson),
    readonly ThirdPersona = new app.UInt8Pointer(address + entityOffsets.ThirdPersona),
    readonly ITEMGLOW = new app.UInt8Pointer(address + entityOffsets.ITEMGLOW),
    readonly glowThroughWalls = new app.UInt8Pointer(address + entityOffsets.glowThroughWall)) {}
}
