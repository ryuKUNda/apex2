"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pointer = void 0;
class Pointer {
    constructor(address, bufferSize) {
        this.address = address;
        this.bufferSize = bufferSize;
    }
    get buffer() {
        if (this.cache)
            return this.cache;
        throw new Error(`Unresolved pointer ${this.address.toString(16)}`);
    }
    set buffer(value) {
        this.cache = value;
    }
}
exports.Pointer = Pointer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9pbnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvZHJpdmVyL1BvaW50ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBc0IsT0FBTztJQUczQixZQUNXLE9BQWUsRUFDZixVQUFrQjtRQURsQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsZUFBVSxHQUFWLFVBQVUsQ0FBUTtJQUFHLENBQUM7SUFFakMsSUFBSSxNQUFNO1FBQ1IsSUFBSSxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELElBQUksTUFBTSxDQUFDLEtBQWU7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztDQUNGO0FBZkQsMEJBZUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgYWJzdHJhY3QgY2xhc3MgUG9pbnRlciB7XG4gIHByaXZhdGUgY2FjaGU/OiBEYXRhVmlldztcblxuICBjb25zdHJ1Y3RvcihcbiAgICByZWFkb25seSBhZGRyZXNzOiBiaWdpbnQsXG4gICAgcmVhZG9ubHkgYnVmZmVyU2l6ZTogbnVtYmVyKSB7fVxuICAgIFxuICBnZXQgYnVmZmVyKCkge1xuICAgIGlmICh0aGlzLmNhY2hlKSByZXR1cm4gdGhpcy5jYWNoZTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVucmVzb2x2ZWQgcG9pbnRlciAke3RoaXMuYWRkcmVzcy50b1N0cmluZygxNil9YCk7XG4gIH1cblxuICBzZXQgYnVmZmVyKHZhbHVlOiBEYXRhVmlldykge1xuICAgIHRoaXMuY2FjaGUgPSB2YWx1ZTtcbiAgfVxufVxuIl19