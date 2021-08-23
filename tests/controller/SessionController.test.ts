import chai from 'chai';
import { SessionController } from '../../src/controller/SessionController';
import chaiHttp from 'chai-http';
import type { SessionJSON } from "../../src/data";

chai.use(chaiHttp);
const expect = chai.expect;

describe('SessionControllerTest', () => {
  
  it('get all sessions', () => {
    let controller: SessionController = new SessionController();
    let sessions:SessionJSON[] = controller.all();
    expect(sessions).to.deep.equal(    [{"end": "2021-04-24", "id": "S20211", "name": "Hiver 2021", "start": "2021-12-27"}, {"end": "2021-08-28", "id": "S20212", "name": "Été 2021", "start": "2021-04-25"}, {"end": "2021-12-25", "id": "S20213", "name": "Automne 2021", "start": "2021-08-29"}])
  })
    
});