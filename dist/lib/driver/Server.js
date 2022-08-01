"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const app = require("..");
class Server {
    async processesAsync() {
        const response = await fetch('/api/proc');
        const result = await response.json();
        return result.map(x => new app.Process(x));
    }
    async versionAsync() {
        const response = await fetch('/api/version');
        const value = await response.json().catch(() => 0);
        return value;
    }
}
exports.Server = Server;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9kcml2ZXIvU2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBCQUEwQjtBQUcxQixNQUFhLE1BQU07SUFDakIsS0FBSyxDQUFDLGNBQWM7UUFDbEIsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUMsTUFBTSxNQUFNLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFpQixDQUFDO1FBQ3BELE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxLQUFLLENBQUMsWUFBWTtRQUNoQixNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM3QyxNQUFNLEtBQUssR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFXLENBQUM7UUFDN0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0NBQ0Y7QUFaRCx3QkFZQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFwcCBmcm9tICcuLic7XG5pbXBvcnQge1Byb2N9IGZyb20gJy4vdHlwZXMvUHJvYyc7XG5cbmV4cG9ydCBjbGFzcyBTZXJ2ZXIge1xuICBhc3luYyBwcm9jZXNzZXNBc3luYygpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3Byb2MnKTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCkgYXMgQXJyYXk8UHJvYz47XG4gICAgcmV0dXJuIHJlc3VsdC5tYXAoeCA9PiBuZXcgYXBwLlByb2Nlc3MoeCkpO1xuICB9XG5cbiAgYXN5bmMgdmVyc2lvbkFzeW5jKCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvdmVyc2lvbicpO1xuICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpLmNhdGNoKCgpID0+IDApIGFzIE51bWJlcjtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cbiJdfQ==