"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UInt8Pointer = void 0;
const app = require("..");
class UInt8Pointer extends app.Pointer {
    constructor(address) {
        super(address, 0x1);
    }
    get value() {
        return this.buffer.getUint8(0);
    }
    set value(value) {
        this.buffer.setUint8(0, value);
    }
    toString() {
        return this.value.toString();
    }
}
exports.UInt8Pointer = UInt8Pointer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVUludDhQb2ludGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9wb2ludGVycy9VSW50OFBvaW50ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMEJBQTBCO0FBRTFCLE1BQWEsWUFBYSxTQUFRLEdBQUcsQ0FBQyxPQUFPO0lBQzNDLFlBQVksT0FBZTtRQUN6QixLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsUUFBUTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMvQixDQUFDO0NBQ0Y7QUFoQkQsb0NBZ0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYXBwIGZyb20gJy4uJztcblxuZXhwb3J0IGNsYXNzIFVJbnQ4UG9pbnRlciBleHRlbmRzIGFwcC5Qb2ludGVyIHtcbiAgY29uc3RydWN0b3IoYWRkcmVzczogYmlnaW50KSB7XG4gICAgc3VwZXIoYWRkcmVzcywgMHgxKTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5idWZmZXIuZ2V0VWludDgoMCk7XG4gIH1cblxuICBzZXQgdmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuYnVmZmVyLnNldFVpbnQ4KDAsIHZhbHVlKTtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlLnRvU3RyaW5nKCk7XG4gIH1cbn1cbiJdfQ==