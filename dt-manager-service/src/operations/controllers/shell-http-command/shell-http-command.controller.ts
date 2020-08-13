import { Controller, Post, Body, HttpException, HttpStatus, Put } from '@nestjs/common';
import { AssetAdministrationShellEnv, validate, Submodel } from 'i40-aas-objects';

@Controller('aas')
export class ShellHttpCommandController {

    @Post()
    public createAASFromEnv(@Body() aasEnvObject: AssetAdministrationShellEnv) {
        // console.log(aasEnvObject);
        console.log(validate(aasEnvObject).valid);
        throw new HttpException('Invalid payload data', HttpStatus.BAD_REQUEST);
    }

    @Post('submodel')
    public createSubmodel(@Body() submodelObject: Submodel) {
        console.log(submodelObject);
    }
}
