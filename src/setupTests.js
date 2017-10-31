import raf from './tempPolyfills';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
};
global.localStorage = localStorageMock;

global.fetch = jest.fn(() => new Promise(
    resolve => resolve({
        json : () => ({
            categories: [{name:'react'}],
            posts : {
                post: {
                    id: "123"
                }
            }
        })
    }))
);