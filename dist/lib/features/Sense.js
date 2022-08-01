"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sense = void 0;
const app = require("..");
class Sense {
    constructor(core, maximumDistance = 250) {
        this.core = core;
        this.maximumDistance = maximumDistance;
    }
    async updateAsync(localPlayer, players, mode) {
        const pointers = [];
        this.collectChanges(localPlayer, players, pointers, mode);
        await this.core.process.batch(pointers).writeAsync();
    }
    collectChanges(localPlayer, players, pointers, mode) {
        for (const x of players) {
            if (x.isLocal || [0, 255].includes(x.glowEnable.value))
                continue;
            const dx = (localPlayer.localOrigin.value.x - x.localOrigin.value.x) * 0.0254;
            const dy = (localPlayer.localOrigin.value.y - x.localOrigin.value.y) * 0.0254;
            const r = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
            if (r < this.maximumDistance) {
                const color = app.Color.parse(x.createColor(localPlayer, mode), 50);
                const type = new app.EntityGlow(101, 101, 46, 90);
                if (!app.shallowEquals(x.glowColor.value, color) || !app.shallowEquals(x.glowType.value, type) || x.glowEnable.value !== 1 || x.glowThroughWalls.value !== 2) {
                    x.glowColor.value = color;
                    x.glowType.value = type;
                    //x.glowEnable.value = 1;
                    //x.glowThroughWalls.value = 2; 
                    x.ThirdPerson.value = 1;
                    x.ITEMGLOW.value = 1363184265;
                    pointers.push(x.glowColor, x.glowType, x.glowEnable, x.glowThroughWalls);
                }
            }
        }
    }
}
exports.Sense = Sense;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2Vuc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2ZlYXR1cmVzL1NlbnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBCQUEwQjtBQUUxQixNQUFhLEtBQUs7SUFDaEIsWUFDbUIsSUFBYyxFQUNkLGtCQUFrQixHQUFHO1FBRHJCLFNBQUksR0FBSixJQUFJLENBQVU7UUFDZCxvQkFBZSxHQUFmLGVBQWUsQ0FBTTtJQUFHLENBQUM7SUFFNUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxXQUF1QixFQUFFLE9BQTBCLEVBQUUsSUFBYTtRQUNsRixNQUFNLFFBQVEsR0FBdUIsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUQsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdkQsQ0FBQztJQUVPLGNBQWMsQ0FBQyxXQUF1QixFQUFFLE9BQTBCLEVBQUUsUUFBNEIsRUFBRSxJQUFhO1FBQ3JILEtBQUssTUFBTSxDQUFDLElBQUksT0FBTyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7Z0JBQUUsU0FBUztZQUNqRSxNQUFNLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7WUFDOUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO1lBQzlFLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFO2dCQUM1QixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDcEUsTUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNsRCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFO29CQUM1SixDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7b0JBQzFCLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztvQkFDeEIseUJBQXlCO29CQUN6QixnQ0FBZ0M7b0JBQ2hDLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztvQkFDeEIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUUsVUFBVSxDQUFDO29CQUM3QixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2lCQUMxRTthQUNGO1NBQ0Y7SUFDSCxDQUFDO0NBQ0Y7QUFoQ0Qsc0JBZ0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYXBwIGZyb20gJy4uJztcblxuZXhwb3J0IGNsYXNzIFNlbnNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb3JlOiBhcHAuQ29yZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1heGltdW1EaXN0YW5jZSA9IDI1MCkge31cblxuICBhc3luYyB1cGRhdGVBc3luYyhsb2NhbFBsYXllcjogYXBwLlBsYXllciwgcGxheWVyczogQXJyYXk8YXBwLlBsYXllcj4sIG1vZGU/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBwb2ludGVyczogQXJyYXk8YXBwLlBvaW50ZXI+ID0gW107XG4gICAgdGhpcy5jb2xsZWN0Q2hhbmdlcyhsb2NhbFBsYXllciwgcGxheWVycywgcG9pbnRlcnMsIG1vZGUpO1xuICAgIGF3YWl0IHRoaXMuY29yZS5wcm9jZXNzLmJhdGNoKHBvaW50ZXJzKS53cml0ZUFzeW5jKCk7ICBcbiAgfVxuXG4gIHByaXZhdGUgY29sbGVjdENoYW5nZXMobG9jYWxQbGF5ZXI6IGFwcC5QbGF5ZXIsIHBsYXllcnM6IEFycmF5PGFwcC5QbGF5ZXI+LCBwb2ludGVyczogQXJyYXk8YXBwLlBvaW50ZXI+LCBtb2RlPzogc3RyaW5nKSB7XG4gICAgZm9yIChjb25zdCB4IG9mIHBsYXllcnMpIHtcbiAgICAgIGlmICh4LmlzTG9jYWwgfHwgWzAsIDI1NV0uaW5jbHVkZXMoeC5nbG93RW5hYmxlLnZhbHVlKSkgY29udGludWU7XG4gICAgICBjb25zdCBkeCA9IChsb2NhbFBsYXllci5sb2NhbE9yaWdpbi52YWx1ZS54IC0geC5sb2NhbE9yaWdpbi52YWx1ZS54KSAqIDAuMDI1NDtcbiAgICAgIGNvbnN0IGR5ID0gKGxvY2FsUGxheWVyLmxvY2FsT3JpZ2luLnZhbHVlLnkgLSB4LmxvY2FsT3JpZ2luLnZhbHVlLnkpICogMC4wMjU0O1xuICAgICAgY29uc3QgciA9IE1hdGguc3FydChNYXRoLnBvdyhkeCwgMikgKyBNYXRoLnBvdyhkeSwgMikpO1xuICAgICAgaWYgKHIgPCB0aGlzLm1heGltdW1EaXN0YW5jZSkge1xuICAgICAgICBjb25zdCBjb2xvciA9IGFwcC5Db2xvci5wYXJzZSh4LmNyZWF0ZUNvbG9yKGxvY2FsUGxheWVyLCBtb2RlKSwgNTApO1xuICAgICAgICBjb25zdCB0eXBlID0gbmV3IGFwcC5FbnRpdHlHbG93KDEwMSwgMTAxLCA0NiwgOTApO1xuICAgICAgICBpZiAoIWFwcC5zaGFsbG93RXF1YWxzKHguZ2xvd0NvbG9yLnZhbHVlLCBjb2xvcikgfHwgIWFwcC5zaGFsbG93RXF1YWxzKHguZ2xvd1R5cGUudmFsdWUsIHR5cGUpIHx8IHguZ2xvd0VuYWJsZS52YWx1ZSAhPT0gMSB8fCB4Lmdsb3dUaHJvdWdoV2FsbHMudmFsdWUgIT09IDIpIHtcbiAgICAgICAgICB4Lmdsb3dDb2xvci52YWx1ZSA9IGNvbG9yO1xuICAgICAgICAgIHguZ2xvd1R5cGUudmFsdWUgPSB0eXBlO1xuICAgICAgICAgIC8veC5nbG93RW5hYmxlLnZhbHVlID0gMTtcbiAgICAgICAgICAvL3guZ2xvd1Rocm91Z2hXYWxscy52YWx1ZSA9IDI7IFxuICAgICAgICAgIHguVGhpcmRQZXJzb24udmFsdWUgPSAxO1xuICAgICAgICAgIHguSVRFTUdMT1cudmFsdWU9IDEzNjMxODQyNjU7XG4gICAgICAgICAgcG9pbnRlcnMucHVzaCh4Lmdsb3dDb2xvciwgeC5nbG93VHlwZSwgeC5nbG93RW5hYmxlLCB4Lmdsb3dUaHJvdWdoV2FsbHMpOyAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19