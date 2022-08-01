"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorPointer = void 0;
const app = require("..");
class ColorPointer extends app.Pointer {
    constructor(address) {
        super(address, 0xC);
    }
    get value() {
        return app.Color.from(this.buffer);
    }
    set value(value) {
        this.buffer = value.toBuffer();
    }
    toString() {
        return this.value.toString();
    }
}
exports.ColorPointer = ColorPointer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sb3JQb2ludGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi91dGlsaXRpZXMvQ29sb3JQb2ludGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBCQUEwQjtBQUUxQixNQUFhLFlBQWEsU0FBUSxHQUFHLENBQUMsT0FBTztJQUMzQyxZQUFZLE9BQWU7UUFDekIsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELElBQUksS0FBSyxDQUFDLEtBQWdCO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQy9CLENBQUM7Q0FDRjtBQWhCRCxvQ0FnQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhcHAgZnJvbSAnLi4nO1xuXG5leHBvcnQgY2xhc3MgQ29sb3JQb2ludGVyIGV4dGVuZHMgYXBwLlBvaW50ZXIge1xuICBjb25zdHJ1Y3RvcihhZGRyZXNzOiBiaWdpbnQpIHtcbiAgICBzdXBlcihhZGRyZXNzLCAweEMpO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiBhcHAuQ29sb3IuZnJvbSh0aGlzLmJ1ZmZlcik7XG4gIH1cblxuICBzZXQgdmFsdWUodmFsdWU6IGFwcC5Db2xvcikge1xuICAgIHRoaXMuYnVmZmVyID0gdmFsdWUudG9CdWZmZXIoKTtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlLnRvU3RyaW5nKCk7XG4gIH1cbn1cbiJdfQ==