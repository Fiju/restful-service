// tslint:disable-next-line:no-import-side-effect
import 'isomorphic-fetch';
import { basicGet, basicPost, basicPut, basicDelete } from '../../rest-client';

describe('Restfull Services Test', () => {
  it('BasicGet: should return data for github abc user', () => {
    const result = basicGet('https://api.github.com/users/abc')();
    return result.then((data : any) => {
      expect(data).toBeDefined();
      expect(data.login).toEqual('abc');
    });
  });

  it('BasicPost: should return data for github abc user', () => {
    const result = basicPost('http://dummy.restapiexample.com/api/v1/create')({
      name: 'restful-test', salary: '1111', age: '11',
    });
    expect(result).toBeDefined();
  });

  it('BasicPut: will update the data against user ID 719', () => {
    const result = basicPut('http://dummy.restapiexample.com/api/v1/update/719')({
      name: 'restful-test', salary: '1111', age: '11',
    });
    expect(result).toBeDefined();
  });

  it('BasicDelete: should delete user against ID 719', () => {
    const result = basicDelete('http://dummy.restapiexample.com/api/v1/update/719')({
      name: 'restful-test', salary: '1111', age: '11',
    });
    expect(result).toBeDefined();
  });
});
