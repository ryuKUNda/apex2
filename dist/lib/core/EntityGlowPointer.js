"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityGlowPointer = void 0;
const app = require("..");
class EntityGlowPointer extends app.Pointer {
    constructor(address) {
        super(address, 0x4);
    }
    get value() {
        return app.EntityGlow.from(this.buffer);
    }
    set value(value) {
        this.buffer = value.toBuffer();
    }
    toString() {
        return this.value.toString();
    }
}
exports.EntityGlowPointer = EntityGlowPointer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5R2xvd1BvaW50ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2NvcmUvRW50aXR5R2xvd1BvaW50ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMEJBQTBCO0FBRTFCLE1BQWEsaUJBQWtCLFNBQVEsR0FBRyxDQUFDLE9BQU87SUFDaEQsWUFBWSxPQUFlO1FBQ3pCLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFxQjtRQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsUUFBUTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMvQixDQUFDO0NBQ0Y7QUFoQkQsOENBZ0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYXBwIGZyb20gJy4uJztcblxuZXhwb3J0IGNsYXNzIEVudGl0eUdsb3dQb2ludGVyIGV4dGVuZHMgYXBwLlBvaW50ZXIge1xuICBjb25zdHJ1Y3RvcihhZGRyZXNzOiBiaWdpbnQpIHtcbiAgICBzdXBlcihhZGRyZXNzLCAweDQpO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiBhcHAuRW50aXR5R2xvdy5mcm9tKHRoaXMuYnVmZmVyKTtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2YWx1ZTogYXBwLkVudGl0eUdsb3cpIHtcbiAgICB0aGlzLmJ1ZmZlciA9IHZhbHVlLnRvQnVmZmVyKCk7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZS50b1N0cmluZygpO1xuICB9XG59XG4iXX0=