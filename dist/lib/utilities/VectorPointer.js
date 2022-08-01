"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VectorPointer = void 0;
const app = require("..");
class VectorPointer extends app.Pointer {
    constructor(address) {
        super(address, 0xC);
    }
    get value() {
        return app.Vector.from(this.buffer);
    }
    set value(value) {
        this.buffer = value.toBuffer();
    }
    toString() {
        return this.value.toString();
    }
}
exports.VectorPointer = VectorPointer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVjdG9yUG9pbnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvdXRpbGl0aWVzL1ZlY3RvclBvaW50ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMEJBQTBCO0FBRTFCLE1BQWEsYUFBYyxTQUFRLEdBQUcsQ0FBQyxPQUFPO0lBQzVDLFlBQVksT0FBZTtRQUN6QixLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsSUFBSSxLQUFLLENBQUMsS0FBaUI7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0IsQ0FBQztDQUNGO0FBaEJELHNDQWdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFwcCBmcm9tICcuLic7XG5cbmV4cG9ydCBjbGFzcyBWZWN0b3JQb2ludGVyIGV4dGVuZHMgYXBwLlBvaW50ZXIge1xuICBjb25zdHJ1Y3RvcihhZGRyZXNzOiBiaWdpbnQpIHtcbiAgICBzdXBlcihhZGRyZXNzLCAweEMpO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiBhcHAuVmVjdG9yLmZyb20odGhpcy5idWZmZXIpO1xuICB9XG5cbiAgc2V0IHZhbHVlKHZhbHVlOiBhcHAuVmVjdG9yKSB7XG4gICAgdGhpcy5idWZmZXIgPSB2YWx1ZS50b0J1ZmZlcigpO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWUudG9TdHJpbmcoKTtcbiAgfVxufVxuIl19