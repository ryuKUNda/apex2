"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
const app = require("..");
const entityOffsets_1 = require("./offsets/entityOffsets");
class Entity {
    constructor(address, localOrigin = new app.VectorPointer(address + entityOffsets_1.entityOffsets.localOrigin), teamNum = new app.UInt8Pointer(address + entityOffsets_1.entityOffsets.iTeamNum), name = new app.UInt64Pointer(address + entityOffsets_1.entityOffsets.iName), glowColor = new app.ColorPointer(address + entityOffsets_1.entityOffsets.glowColor), glowType = new app.EntityGlowPointer(address + entityOffsets_1.entityOffsets.glowType), glowEnable = new app.UInt8Pointer(address + entityOffsets_1.entityOffsets.glowEnable), ThirdPerson = new app.UInt8Pointer(address + entityOffsets_1.entityOffsets.ThirdPerson), glowThroughWalls = new app.UInt8Pointer(address + entityOffsets_1.entityOffsets.glowThroughWall)) {
        this.localOrigin = localOrigin;
        this.teamNum = teamNum;
        this.name = name;
        this.glowColor = glowColor;
        this.glowType = glowType;
        this.glowEnable = glowEnable;
        this.ThirdPerson = ThirdPerson;
        this.glowThroughWalls = glowThroughWalls;
    }
}
exports.Entity = Entity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9jb3JlL0VudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwQkFBMEI7QUFDMUIsMkRBQXNEO0FBRXRELE1BQXNCLE1BQU07SUFDMUIsWUFBWSxPQUFlLEVBQ2hCLGNBQWMsSUFBSSxHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyw2QkFBYSxDQUFDLFdBQVcsQ0FBQyxFQUN4RSxVQUFVLElBQUksR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLEdBQUcsNkJBQWEsQ0FBQyxRQUFRLENBQUMsRUFDaEUsT0FBTyxJQUFJLEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLDZCQUFhLENBQUMsS0FBSyxDQUFDLEVBQzNELFlBQVksSUFBSSxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sR0FBRyw2QkFBYSxDQUFDLFNBQVMsQ0FBQyxFQUNuRSxXQUFXLElBQUksR0FBRyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sR0FBRyw2QkFBYSxDQUFDLFFBQVEsQ0FBQyxFQUN0RSxhQUFhLElBQUksR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLEdBQUcsNkJBQWEsQ0FBQyxVQUFVLENBQUMsRUFDckUsY0FBYyxJQUFJLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxHQUFHLDZCQUFhLENBQUMsV0FBVyxDQUFDLEVBQ3ZFLG1CQUFtQixJQUFJLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxHQUFHLDZCQUFhLENBQUMsZUFBZSxDQUFDO1FBUGhGLGdCQUFXLEdBQVgsV0FBVyxDQUE2RDtRQUN4RSxZQUFPLEdBQVAsT0FBTyxDQUF5RDtRQUNoRSxTQUFJLEdBQUosSUFBSSxDQUF1RDtRQUMzRCxjQUFTLEdBQVQsU0FBUyxDQUEwRDtRQUNuRSxhQUFRLEdBQVIsUUFBUSxDQUE4RDtRQUN0RSxlQUFVLEdBQVYsVUFBVSxDQUEyRDtRQUNyRSxnQkFBVyxHQUFYLFdBQVcsQ0FBNEQ7UUFDdkUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFnRTtJQUFHLENBQUM7Q0FDaEc7QUFWRCx3QkFVQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFwcCBmcm9tICcuLic7XG5pbXBvcnQge2VudGl0eU9mZnNldHN9IGZyb20gJy4vb2Zmc2V0cy9lbnRpdHlPZmZzZXRzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEVudGl0eSB7XG4gIGNvbnN0cnVjdG9yKGFkZHJlc3M6IGJpZ2ludCxcbiAgICByZWFkb25seSBsb2NhbE9yaWdpbiA9IG5ldyBhcHAuVmVjdG9yUG9pbnRlcihhZGRyZXNzICsgZW50aXR5T2Zmc2V0cy5sb2NhbE9yaWdpbiksXG4gICAgcmVhZG9ubHkgdGVhbU51bSA9IG5ldyBhcHAuVUludDhQb2ludGVyKGFkZHJlc3MgKyBlbnRpdHlPZmZzZXRzLmlUZWFtTnVtKSxcbiAgICByZWFkb25seSBuYW1lID0gbmV3IGFwcC5VSW50NjRQb2ludGVyKGFkZHJlc3MgKyBlbnRpdHlPZmZzZXRzLmlOYW1lKSxcbiAgICByZWFkb25seSBnbG93Q29sb3IgPSBuZXcgYXBwLkNvbG9yUG9pbnRlcihhZGRyZXNzICsgZW50aXR5T2Zmc2V0cy5nbG93Q29sb3IpLFxuICAgIHJlYWRvbmx5IGdsb3dUeXBlID0gbmV3IGFwcC5FbnRpdHlHbG93UG9pbnRlcihhZGRyZXNzICsgZW50aXR5T2Zmc2V0cy5nbG93VHlwZSksXG4gICAgcmVhZG9ubHkgZ2xvd0VuYWJsZSA9IG5ldyBhcHAuVUludDhQb2ludGVyKGFkZHJlc3MgKyBlbnRpdHlPZmZzZXRzLmdsb3dFbmFibGUpLFxuICAgIHJlYWRvbmx5IFRoaXJkUGVyc29uID0gbmV3IGFwcC5VSW50OFBvaW50ZXIoYWRkcmVzcyArIGVudGl0eU9mZnNldHMuVGhpcmRQZXJzb24pLFxuICAgIHJlYWRvbmx5IGdsb3dUaHJvdWdoV2FsbHMgPSBuZXcgYXBwLlVJbnQ4UG9pbnRlcihhZGRyZXNzICsgZW50aXR5T2Zmc2V0cy5nbG93VGhyb3VnaFdhbGwpKSB7fVxufVxuIl19