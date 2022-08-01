"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CStringPointer = void 0;
const app = require("..");
class CStringPointer extends app.Pointer {
    get value() {
        return app.CString.from(this.buffer);
    }
    toString() {
        return this.value.toString();
    }
}
exports.CStringPointer = CStringPointer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ1N0cmluZ1BvaW50ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3V0aWxpdGllcy9DU3RyaW5nUG9pbnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwQkFBMEI7QUFFMUIsTUFBYSxjQUFlLFNBQVEsR0FBRyxDQUFDLE9BQU87SUFDN0MsSUFBSSxLQUFLO1FBQ1AsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0IsQ0FBQztDQUNGO0FBUkQsd0NBUUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhcHAgZnJvbSAnLi4nO1xuXG5leHBvcnQgY2xhc3MgQ1N0cmluZ1BvaW50ZXIgZXh0ZW5kcyBhcHAuUG9pbnRlciB7XG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gYXBwLkNTdHJpbmcuZnJvbSh0aGlzLmJ1ZmZlcik7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZS50b1N0cmluZygpO1xuICB9XG59XG4iXX0=