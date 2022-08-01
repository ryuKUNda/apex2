"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UInt64Pointer = void 0;
const app = require("..");
class UInt64Pointer extends app.Pointer {
    constructor(address) {
        super(address, 0x8);
    }
    get value() {
        return this.buffer.getBigUint64(0, true);
    }
    set value(value) {
        this.buffer.setBigUint64(0, value, true);
    }
    toString() {
        return this.value.toString();
    }
}
exports.UInt64Pointer = UInt64Pointer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVUludDY0UG9pbnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvcG9pbnRlcnMvVUludDY0UG9pbnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwQkFBMEI7QUFFMUIsTUFBYSxhQUFjLFNBQVEsR0FBRyxDQUFDLE9BQU87SUFDNUMsWUFBWSxPQUFlO1FBQ3pCLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0IsQ0FBQztDQUNGO0FBaEJELHNDQWdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFwcCBmcm9tICcuLic7XG5cbmV4cG9ydCBjbGFzcyBVSW50NjRQb2ludGVyIGV4dGVuZHMgYXBwLlBvaW50ZXIge1xuICBjb25zdHJ1Y3RvcihhZGRyZXNzOiBiaWdpbnQpIHtcbiAgICBzdXBlcihhZGRyZXNzLCAweDgpO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmJ1ZmZlci5nZXRCaWdVaW50NjQoMCwgdHJ1ZSk7XG4gIH1cblxuICBzZXQgdmFsdWUodmFsdWU6IGJpZ2ludCkge1xuICAgIHRoaXMuYnVmZmVyLnNldEJpZ1VpbnQ2NCgwLCB2YWx1ZSwgdHJ1ZSk7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZS50b1N0cmluZygpO1xuICB9XG59XG4iXX0=