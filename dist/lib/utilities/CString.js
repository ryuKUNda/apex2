"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CString = void 0;
class CString extends String {
    static from(buffer) {
        let result = '';
        iterateBytes(buffer, x => result += x);
        return result;
    }
}
exports.CString = CString;
function iterateBytes(buffer, add) {
    for (let i = 0; i < buffer.byteLength; i++) {
        const charCode = buffer.getUint8(i);
        if (charCode === 0)
            break;
        add(String.fromCharCode(charCode));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ1N0cmluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvdXRpbGl0aWVzL0NTdHJpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBYSxPQUFRLFNBQVEsTUFBTTtJQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQWdCO1FBQzFCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Q0FDRjtBQU5ELDBCQU1DO0FBRUQsU0FBUyxZQUFZLENBQUMsTUFBZ0IsRUFBRSxHQUE0QjtJQUNsRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMxQyxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksUUFBUSxLQUFLLENBQUM7WUFBRSxNQUFNO1FBQzFCLEdBQUcsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7S0FDcEM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENTdHJpbmcgZXh0ZW5kcyBTdHJpbmcge1xuICBzdGF0aWMgZnJvbShidWZmZXI6IERhdGFWaWV3KTogQ1N0cmluZyB7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIGl0ZXJhdGVCeXRlcyhidWZmZXIsIHggPT4gcmVzdWx0ICs9IHgpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXRlcmF0ZUJ5dGVzKGJ1ZmZlcjogRGF0YVZpZXcsIGFkZDogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBidWZmZXIuYnl0ZUxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY2hhckNvZGUgPSBidWZmZXIuZ2V0VWludDgoaSk7XG4gICAgaWYgKGNoYXJDb2RlID09PSAwKSBicmVhaztcbiAgICBhZGQoU3RyaW5nLmZyb21DaGFyQ29kZShjaGFyQ29kZSkpO1xuICB9XG59XG4iXX0=