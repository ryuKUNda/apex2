"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Process = void 0;
const app = require("..");
class Process {
    constructor(value, args = value.args, command = value.command, pid = value.pid) {
        this.args = args;
        this.command = command;
        this.pid = pid;
    }
    batch(...values) {
        return new app.Batch(this.pid, values.flatMap(x => x));
    }
    async regionsAsync() {
        const response = await fetch(`/api/proc/${this.pid}/maps`);
        const result = await response.json();
        return result.map(x => new app.Region(x));
    }
}
exports.Process = Process;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvY2Vzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvZHJpdmVyL1Byb2Nlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMEJBQTBCO0FBSTFCLE1BQWEsT0FBTztJQUNsQixZQUFZLEtBQVcsRUFDWixPQUFPLEtBQUssQ0FBQyxJQUFJLEVBQ2pCLFVBQVUsS0FBSyxDQUFDLE9BQU8sRUFDdkIsTUFBTSxLQUFLLENBQUMsR0FBRztRQUZmLFNBQUksR0FBSixJQUFJLENBQWE7UUFDakIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsUUFBRyxHQUFILEdBQUcsQ0FBWTtJQUFHLENBQUM7SUFFOUIsS0FBSyxDQUFDLEdBQUcsTUFBK0M7UUFDdEQsT0FBTyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsS0FBSyxDQUFDLFlBQVk7UUFDaEIsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsYUFBYSxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQztRQUMzRCxNQUFNLE1BQU0sR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQWdCLENBQUM7UUFDbkQsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUNGO0FBZkQsMEJBZUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhcHAgZnJvbSAnLi4nO1xuaW1wb3J0IHtNYXB9IGZyb20gJy4vdHlwZXMvTWFwJztcbmltcG9ydCB7UHJvY30gZnJvbSAnLi90eXBlcy9Qcm9jJztcblxuZXhwb3J0IGNsYXNzIFByb2Nlc3Mge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogUHJvYyxcbiAgICByZWFkb25seSBhcmdzID0gdmFsdWUuYXJncyxcbiAgICByZWFkb25seSBjb21tYW5kID0gdmFsdWUuY29tbWFuZCxcbiAgICByZWFkb25seSBwaWQgPSB2YWx1ZS5waWQpIHt9XG5cbiAgYmF0Y2goLi4udmFsdWVzOiBBcnJheTxhcHAuUG9pbnRlciB8IEFycmF5PGFwcC5Qb2ludGVyPj4pIHtcbiAgICByZXR1cm4gbmV3IGFwcC5CYXRjaCh0aGlzLnBpZCwgdmFsdWVzLmZsYXRNYXAoeCA9PiB4KSk7XG4gIH1cbiAgXG4gIGFzeW5jIHJlZ2lvbnNBc3luYygpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL3Byb2MvJHt0aGlzLnBpZH0vbWFwc2ApO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKSBhcyBBcnJheTxNYXA+O1xuICAgIHJldHVybiByZXN1bHQubWFwKHggPT4gbmV3IGFwcC5SZWdpb24oeCkpO1xuICB9XG59XG4iXX0=