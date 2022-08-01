"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UInt64Pointer_s = void 0;
const app = require("..");
class UInt64Pointer_s extends app.Pointer {
    constructor(address) {
        super(address, 0x8);
    }
    get value() {
        return this.buffer.getBigUint64(0);
    }
    set value(value) {
        this.buffer.setBigUint64(0, value);
    }
    toString() {
        return this.value.toString();
    }
}
exports.UInt64Pointer_s = UInt64Pointer_s;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVUludDY0UG9pbnRlcl9zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9wb2ludGVycy9VSW50NjRQb2ludGVyX3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMEJBQTBCO0FBRTFCLE1BQWEsZUFBZ0IsU0FBUSxHQUFHLENBQUMsT0FBTztJQUM5QyxZQUFZLE9BQWU7UUFDekIsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsSUFBSSxLQUFLLENBQUMsS0FBYTtRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0IsQ0FBQztDQUNGO0FBaEJELDBDQWdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFwcCBmcm9tICcuLic7XG5cbmV4cG9ydCBjbGFzcyBVSW50NjRQb2ludGVyX3MgZXh0ZW5kcyBhcHAuUG9pbnRlciB7XG4gIGNvbnN0cnVjdG9yKGFkZHJlc3M6IGJpZ2ludCkge1xuICAgIHN1cGVyKGFkZHJlc3MsIDB4OCk7XG4gIH1cblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnVmZmVyLmdldEJpZ1VpbnQ2NCgwKTtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2YWx1ZTogYmlnaW50KSB7XG4gICAgdGhpcy5idWZmZXIuc2V0QmlnVWludDY0KDAsIHZhbHVlKTtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlLnRvU3RyaW5nKCk7XG4gIH1cbn1cbiJdfQ==