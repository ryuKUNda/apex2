"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triggerbot = void 0;
const Math_1 = require("../utilities/Math");
class Triggerbot {
    constructor(inFov = 2, maximumDistance = 200) {
        this.inFov = inFov;
        this.maximumDistance = maximumDistance;
    }
    async updateAsync(localPlayer, players, mode) {
        var audio = new Audio('https://www.myinstants.com/media/sounds/movie_1.mp3');
        for (const x of players) {
            if (x.isLocal)
                continue;
            if (localPlayer.isSameTeam(x, mode))
                continue;
            if (!x.isValid)
                continue;
            const d = localPlayer.localOrigin.value
                .subtract(x.localOrigin.value)
                .multiply(0.0254);
            if (d.magnitude() > this.maximumDistance)
                continue;
            if (this.angleFov(localPlayer, x.bodyPos) > this.inFov)
                continue;
            audio.play();
        }
    }
    angleFov(localPlayer, dst) {
        var d = dst.subtract(localPlayer.cameraPos.value);
        d.normalize();
        const f = localPlayer.viewAngles.value.forward();
        const angle = (0, Math_1.RAD2DEG)(f.angleBetween(d));
        return Math.max(angle, 0);
    }
}
exports.Triggerbot = Triggerbot;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJpZ2dlcmJvdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvZmVhdHVyZXMvVHJpZ2dlcmJvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSw0Q0FBNEM7QUFFNUMsTUFBYSxVQUFVO0lBQ3JCLFlBQ21CLFFBQVEsQ0FBQyxFQUNULGtCQUFrQixHQUFHO1FBRHJCLFVBQUssR0FBTCxLQUFLLENBQUk7UUFDVCxvQkFBZSxHQUFmLGVBQWUsQ0FBTTtJQUN0QyxDQUFDO0lBRUgsS0FBSyxDQUFDLFdBQVcsQ0FBQyxXQUF1QixFQUFFLE9BQTBCLEVBQUUsSUFBYTtRQUNsRixJQUFJLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO1FBQzdFLEtBQUssTUFBTSxDQUFDLElBQUksT0FBTyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxDQUFDLE9BQU87Z0JBQUUsU0FBUztZQUN4QixJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQztnQkFBRSxTQUFTO1lBQzlDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTztnQkFBRSxTQUFTO1lBRXpCLE1BQU0sQ0FBQyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUMsS0FBSztpQkFDcEMsUUFBUSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO2lCQUM3QixRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFcEIsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLGVBQWU7Z0JBQUUsU0FBUztZQUVuRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSztnQkFBRSxTQUFTO1lBRWpFLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNkO0lBQ0gsQ0FBQztJQUVPLFFBQVEsQ0FBQyxXQUF1QixFQUFFLEdBQVc7UUFDbkQsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVkLE1BQU0sQ0FBQyxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pELE1BQU0sS0FBSyxHQUFHLElBQUEsY0FBTyxFQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDRjtBQWpDRCxnQ0FpQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhcHAgZnJvbSAnLi4nO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi4vdXRpbGl0aWVzL1ZlY3Rvcic7XG5pbXBvcnQgeyBSQUQyREVHIH0gZnJvbSAnLi4vdXRpbGl0aWVzL01hdGgnO1xuXG5leHBvcnQgY2xhc3MgVHJpZ2dlcmJvdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgaW5Gb3YgPSAyLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbWF4aW11bURpc3RhbmNlID0gMjAwKSB7XG4gICAgfVxuXG4gIGFzeW5jIHVwZGF0ZUFzeW5jKGxvY2FsUGxheWVyOiBhcHAuUGxheWVyLCBwbGF5ZXJzOiBBcnJheTxhcHAuUGxheWVyPiwgbW9kZT86IHN0cmluZykge1xuICAgIHZhciBhdWRpbyA9IG5ldyBBdWRpbygnaHR0cHM6Ly93d3cubXlpbnN0YW50cy5jb20vbWVkaWEvc291bmRzL21vdmllXzEubXAzJyk7XG4gICAgZm9yIChjb25zdCB4IG9mIHBsYXllcnMpIHtcbiAgICAgIGlmICh4LmlzTG9jYWwpIGNvbnRpbnVlO1xuICAgICAgaWYgKGxvY2FsUGxheWVyLmlzU2FtZVRlYW0oeCwgbW9kZSkpIGNvbnRpbnVlO1xuICAgICAgaWYgKCF4LmlzVmFsaWQpIGNvbnRpbnVlO1xuICAgICAgXG4gICAgICBjb25zdCBkID0gbG9jYWxQbGF5ZXIubG9jYWxPcmlnaW4udmFsdWVcbiAgICAgICAgLnN1YnRyYWN0KHgubG9jYWxPcmlnaW4udmFsdWUpXG4gICAgICAgIC5tdWx0aXBseSgwLjAyNTQpO1xuXG4gICAgICBpZiAoZC5tYWduaXR1ZGUoKSA+IHRoaXMubWF4aW11bURpc3RhbmNlKSBjb250aW51ZTtcblxuICAgICAgaWYgKHRoaXMuYW5nbGVGb3YobG9jYWxQbGF5ZXIsIHguYm9keVBvcykgPiB0aGlzLmluRm92KSBjb250aW51ZTtcbiAgICAgIFxuICAgICAgYXVkaW8ucGxheSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYW5nbGVGb3YobG9jYWxQbGF5ZXI6IGFwcC5QbGF5ZXIsIGRzdDogVmVjdG9yKTogbnVtYmVyIHtcbiAgICB2YXIgZCA9IGRzdC5zdWJ0cmFjdChsb2NhbFBsYXllci5jYW1lcmFQb3MudmFsdWUpO1xuICAgIGQubm9ybWFsaXplKCk7XG5cbiAgICBjb25zdCBmID0gbG9jYWxQbGF5ZXIudmlld0FuZ2xlcy52YWx1ZS5mb3J3YXJkKCk7XG4gICAgY29uc3QgYW5nbGUgPSBSQUQyREVHKGYuYW5nbGVCZXR3ZWVuKGQpKTtcbiAgICByZXR1cm4gTWF0aC5tYXgoYW5nbGUsIDApO1xuICB9XG59XG4iXX0=