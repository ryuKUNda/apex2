"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UInt32Pointer = void 0;
const app = require("..");
class UInt32Pointer extends app.Pointer {
    constructor(address) {
        super(address, 0x4);
    }
    get value() {
        return this.buffer.getUint32(0);
    }
    set value(value) {
        this.buffer.setUint32(0, value);
    }
    toString() {
        return this.value.toString();
    }
}
exports.UInt32Pointer = UInt32Pointer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVUludDMyUG9pbnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvcG9pbnRlcnMvVUludDMyUG9pbnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwQkFBMEI7QUFFMUIsTUFBYSxhQUFjLFNBQVEsR0FBRyxDQUFDLE9BQU87SUFDNUMsWUFBWSxPQUFlO1FBQ3pCLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELElBQUksS0FBSyxDQUFDLEtBQWE7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQy9CLENBQUM7Q0FDRjtBQWhCRCxzQ0FnQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhcHAgZnJvbSAnLi4nO1xuXG5leHBvcnQgY2xhc3MgVUludDMyUG9pbnRlciBleHRlbmRzIGFwcC5Qb2ludGVyIHtcbiAgY29uc3RydWN0b3IoYWRkcmVzczogYmlnaW50KSB7XG4gICAgc3VwZXIoYWRkcmVzcywgMHg0KTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5idWZmZXIuZ2V0VWludDMyKDApO1xuICB9XG5cbiAgc2V0IHZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLmJ1ZmZlci5zZXRVaW50MzIoMCwgdmFsdWUpO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWUudG9TdHJpbmcoKTtcbiAgfVxufVxuIl19