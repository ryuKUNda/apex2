"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ui = void 0;
const app = require("../lib");
const language_1 = require("./language");
const container = document.querySelector('.container');
const content = document.querySelector('.content');
const server = new app.Server();
async function ui(mainAsync) {
    while (true) {
        await new Promise(x => setTimeout(x, 1000));
        switch (await server.versionAsync()) {
            case 0:
                content.innerHTML = language_1.language.errorDriver;
                break;
            case 3:
                content.innerHTML = await tryAsync(mainAsync) ? language_1.language.error : language_1.language.errorProcess;
                break;
            default:
                content.innerHTML = language_1.language.errorVersion;
                break;
        }
    }
}
exports.ui = ui;
async function tryAsync(mainAsync) {
    const core = await app.Core.createAsync(server).catch(() => undefined);
    if (core) {
        container.style.display = 'none';
        await mainAsync(core).catch(console.error.bind(console));
        container.style.display = 'inherit';
        return true;
    }
    else {
        return false;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdWkvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOEJBQThCO0FBQzlCLHlDQUFvQztBQUNwQyxNQUFNLFNBQVMsR0FBaUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNyRSxNQUFNLE9BQU8sR0FBaUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNqRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUV6QixLQUFLLFVBQVUsRUFBRSxDQUFDLFNBQTRDO0lBQ25FLE9BQU8sSUFBSSxFQUFFO1FBQ1gsTUFBTSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM1QyxRQUFRLE1BQU0sTUFBTSxDQUFDLFlBQVksRUFBRSxFQUFFO1lBQ25DLEtBQUssQ0FBQztnQkFDSixPQUFPLENBQUMsU0FBUyxHQUFHLG1CQUFRLENBQUMsV0FBVyxDQUFDO2dCQUN6QyxNQUFNO1lBQ1IsS0FBSyxDQUFDO2dCQUNKLE9BQU8sQ0FBQyxTQUFTLEdBQUcsTUFBTSxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxtQkFBUSxDQUFDLFlBQVksQ0FBQztnQkFDdkYsTUFBTTtZQUNSO2dCQUNFLE9BQU8sQ0FBQyxTQUFTLEdBQUcsbUJBQVEsQ0FBQyxZQUFZLENBQUM7Z0JBQzFDLE1BQU07U0FDVDtLQUNGO0FBQ0gsQ0FBQztBQWZELGdCQWVDO0FBRUQsS0FBSyxVQUFVLFFBQVEsQ0FBQyxTQUE0QztJQUNsRSxNQUFNLElBQUksR0FBRyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2RSxJQUFJLElBQUksRUFBRTtRQUNSLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUNqQyxNQUFNLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUN6RCxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7UUFDcEMsT0FBTyxJQUFJLENBQUM7S0FDYjtTQUFNO1FBQ0wsT0FBTyxLQUFLLENBQUM7S0FDZDtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhcHAgZnJvbSAnLi4vbGliJztcbmltcG9ydCB7bGFuZ3VhZ2V9IGZyb20gJy4vbGFuZ3VhZ2UnO1xuY29uc3QgY29udGFpbmVyID0gPEhUTUxFbGVtZW50PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG5jb25zdCBjb250ZW50ID0gPEhUTUxFbGVtZW50PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuY29uc3Qgc2VydmVyID0gbmV3IGFwcC5TZXJ2ZXIoKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVpKG1haW5Bc3luYzogKGNvcmU6IGFwcC5Db3JlKSA9PiBQcm9taXNlPHZvaWQ+KSB7XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgYXdhaXQgbmV3IFByb21pc2UoeCA9PiBzZXRUaW1lb3V0KHgsIDEwMDApKTsgICBcbiAgICBzd2l0Y2ggKGF3YWl0IHNlcnZlci52ZXJzaW9uQXN5bmMoKSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IGxhbmd1YWdlLmVycm9yRHJpdmVyO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSBhd2FpdCB0cnlBc3luYyhtYWluQXN5bmMpID8gbGFuZ3VhZ2UuZXJyb3IgOiBsYW5ndWFnZS5lcnJvclByb2Nlc3M7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSBsYW5ndWFnZS5lcnJvclZlcnNpb247XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiB0cnlBc3luYyhtYWluQXN5bmM6IChjb3JlOiBhcHAuQ29yZSkgPT4gUHJvbWlzZTx2b2lkPikge1xuICBjb25zdCBjb3JlID0gYXdhaXQgYXBwLkNvcmUuY3JlYXRlQXN5bmMoc2VydmVyKS5jYXRjaCgoKSA9PiB1bmRlZmluZWQpO1xuICBpZiAoY29yZSkge1xuICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGF3YWl0IG1haW5Bc3luYyhjb3JlKS5jYXRjaChjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSkpO1xuICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2luaGVyaXQnO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19