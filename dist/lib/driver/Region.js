"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Region = void 0;
class Region {
    constructor(value, start = parseHex(value.start), end = parseHex(value.end), perms = value.perms, offset = parseHex(value.offset), devMajor = value.devMajor, devMinor = value.devMinor, inode = parseHex(value.inode), pathname = value.pathname) {
        this.start = start;
        this.end = end;
        this.perms = perms;
        this.offset = offset;
        this.devMajor = devMajor;
        this.devMinor = devMinor;
        this.inode = inode;
        this.pathname = pathname;
    }
}
exports.Region = Region;
function parseHex(value) {
    return /^0x/i.test(value)
        ? BigInt(value)
        : BigInt(`0x${value}`);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVnaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9kcml2ZXIvUmVnaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLE1BQWEsTUFBTTtJQUNqQixZQUFZLEtBQVUsRUFDWCxRQUFRLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQzdCLE1BQU0sUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFDekIsUUFBUSxLQUFLLENBQUMsS0FBSyxFQUNuQixTQUFTLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQy9CLFdBQVcsS0FBSyxDQUFDLFFBQVEsRUFDekIsV0FBVyxLQUFLLENBQUMsUUFBUSxFQUN6QixRQUFRLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQzdCLFdBQVcsS0FBSyxDQUFDLFFBQVE7UUFQekIsVUFBSyxHQUFMLEtBQUssQ0FBd0I7UUFDN0IsUUFBRyxHQUFILEdBQUcsQ0FBc0I7UUFDekIsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUNuQixXQUFNLEdBQU4sTUFBTSxDQUF5QjtRQUMvQixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUN6QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUF3QjtRQUM3QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtJQUFHLENBQUM7Q0FDekM7QUFWRCx3QkFVQztBQUVELFNBQVMsUUFBUSxDQUFDLEtBQWE7SUFDN0IsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN2QixDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQzNCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01hcH0gZnJvbSAnLi90eXBlcy9NYXAnO1xuXG5leHBvcnQgY2xhc3MgUmVnaW9uIHtcbiAgY29uc3RydWN0b3IodmFsdWU6IE1hcCxcbiAgICByZWFkb25seSBzdGFydCA9IHBhcnNlSGV4KHZhbHVlLnN0YXJ0KSxcbiAgICByZWFkb25seSBlbmQgPSBwYXJzZUhleCh2YWx1ZS5lbmQpLFxuICAgIHJlYWRvbmx5IHBlcm1zID0gdmFsdWUucGVybXMsXG4gICAgcmVhZG9ubHkgb2Zmc2V0ID0gcGFyc2VIZXgodmFsdWUub2Zmc2V0KSxcbiAgICByZWFkb25seSBkZXZNYWpvciA9IHZhbHVlLmRldk1ham9yLFxuICAgIHJlYWRvbmx5IGRldk1pbm9yID0gdmFsdWUuZGV2TWlub3IsXG4gICAgcmVhZG9ubHkgaW5vZGUgPSBwYXJzZUhleCh2YWx1ZS5pbm9kZSksXG4gICAgcmVhZG9ubHkgcGF0aG5hbWUgPSB2YWx1ZS5wYXRobmFtZSkge31cbn1cblxuZnVuY3Rpb24gcGFyc2VIZXgodmFsdWU6IHN0cmluZykge1xuICByZXR1cm4gL14weC9pLnRlc3QodmFsdWUpXG4gICAgPyBCaWdJbnQodmFsdWUpXG4gICAgOiBCaWdJbnQoYDB4JHt2YWx1ZX1gKTtcbn1cbiJdfQ==