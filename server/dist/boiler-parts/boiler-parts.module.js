"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoilerPartsModule = void 0;
const common_1 = require("@nestjs/common");
const boiler_parts_controller_1 = require("./boiler-parts.controller");
const boiler_parts_service_1 = require("./boiler-parts.service");
const sequelize_1 = require("@nestjs/sequelize");
const boiler_parts_model_1 = require("./boiler-parts.model");
let BoilerPartsModule = class BoilerPartsModule {
};
BoilerPartsModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([boiler_parts_model_1.BoilerParts])],
        controllers: [boiler_parts_controller_1.BoilerPartsController],
        providers: [boiler_parts_service_1.BoilerPartsService],
        exports: [boiler_parts_service_1.BoilerPartsService],
    })
], BoilerPartsModule);
exports.BoilerPartsModule = BoilerPartsModule;
//# sourceMappingURL=boiler-parts.module.js.map