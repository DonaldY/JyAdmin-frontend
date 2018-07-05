import { SpuModule } from './spu.module';

describe('spuModule', () => {
    let spuModule: SpuModule;

    beforeEach(() => {
        spuModule = new SpuModule();
    });

    it('should create an instance', () => {
        expect(SpuModule).toBeTruthy();
    });
});
