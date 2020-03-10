const timeStamp = require('./timeStamp');

describe('timeStamp', () => {
  let dateSpy;

  beforeAll(() => {
    const mockDate = '2020-03-09T03:33:41.615Z';
    dateSpy = jest.spyOn(global, 'Date').mockImplementation(() => ({
      toISOString() {
        return mockDate;
      },
    }));
  });

  afterAll(() => {
    dateSpy.mockRestore();
  });

  it('should return a "longDate" in a formatted ISO format: yyyymmddThhmmssZ', () => {
    const { longDate } = timeStamp();
    expect(longDate).toMatchSnapshot();
  });

  it('should return a "shortDate" in a formatted ISO format: yyyymmdd', () => {
    const { shortDate } = timeStamp();
    expect(shortDate).toMatchSnapshot();
  });
});